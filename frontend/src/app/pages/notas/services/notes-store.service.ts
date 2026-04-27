import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NoteCardData, NoteStatus } from '../models/note.model';

@Injectable({ providedIn: 'root' })
export class NotesStoreService {
    private readonly storageKey = 'google-keep-notes-v2';
    private nextId = 1;

    private readonly notesSubject = new BehaviorSubject<NoteCardData[]>(this.loadInitialNotes());
    readonly notes$ = this.notesSubject.asObservable();

    get notes(): NoteCardData[] {
        return this.notesSubject.value;
    }

    getByStatus(status: NoteStatus): NoteCardData[] {
        return this.notes
            .filter((note) => (note.status || 'active') === status)
            .slice()
            .sort((a, b) => Number(!!b.pinned) - Number(!!a.pinned) || b.id - a.id);
    }

    getReminderNotes(): NoteCardData[] {
        return this.getByStatus('active').filter((note) => !!note.reminderAt);
    }

    create(note: Omit<NoteCardData, 'id'>): NoteCardData {
        const entity: NoteCardData = {
            ...note,
            id: this.nextId++,
            status: note.status || 'active'
        };

        this.setNotes([entity, ...this.notes]);
        return entity;
    }

    update(id: number, patch: Partial<NoteCardData>): void {
        this.setNotes(this.notes.map((note) => (note.id === id ? { ...note, ...patch } : note)));
    }

    setStatus(id: number, status: NoteStatus): void {
        this.update(id, { status });
    }

    deletePermanently(id: number): void {
        this.setNotes(this.notes.filter((note) => note.id !== id));
    }

    duplicate(id: number): void {
        const source = this.notes.find((note) => note.id === id);
        if (!source) {
            return;
        }

        this.create({
            ...source,
            title: `${source.title} (copia)`,
            checklistItems: source.checklistItems?.map((item) => ({ ...item })),
            collaborators: source.collaborators ? [...source.collaborators] : undefined,
            status: source.status === 'trash' ? 'active' : source.status
        });
    }

    private setNotes(value: NoteCardData[]): void {
        this.notesSubject.next(value);
        localStorage.setItem(this.storageKey, JSON.stringify(value));
    }

    private loadInitialNotes(): NoteCardData[] {
        const stored = localStorage.getItem(this.storageKey);
        if (stored) {
            try {
                const parsed = JSON.parse(stored) as NoteCardData[];
                const maxId = parsed.reduce((acc, note) => Math.max(acc, note.id || 0), 0);
                this.nextId = maxId + 1;
                return parsed;
            } catch {
                localStorage.removeItem(this.storageKey);
            }
        }

        const seed: NoteCardData[] = [
            {
                id: 1,
                type: 'text',
                status: 'active',
                title: 'Ideas para el sprint de mayo',
                description: 'Revisar pendientes del backlog, priorizar mejoras visuales del tablero y dejar definidos criterios de aceptacion para QA.',
                imageUrl: '/demo/images/galleria/galleria3.jpg',
                collaborators: ['Ana'],
                reminderAt: '2026-05-10T09:00'
            },
            {
                id: 2,
                type: 'checklist',
                status: 'active',
                title: 'Compra de PC',
                description: '',
                checklistItems: [
                    { text: 'Procesador Ryzen 7', checked: true },
                    { text: 'Placa madre B650', checked: false },
                    { text: 'RAM 32GB DDR5', checked: false },
                    { text: 'SSD NVMe 1TB', checked: false },
                    { text: 'Fuente 750W Gold', checked: false }
                ]
            },
            {
                id: 3,
                type: 'text',
                status: 'archived',
                title: 'Plan de viaje',
                description: 'Reservar hotel, confirmar horarios de vuelo y preparar checklist de equipaje antes del miercoles.',
                imageUrl: '/demo/images/galleria/galleria11.jpg'
            },
            {
                id: 4,
                type: 'text',
                status: 'trash',
                title: 'Nota eliminada',
                description: 'Esta nota esta en papelera para probar restauracion y eliminado permanente.'
            }
        ];

        this.nextId = 5;
        localStorage.setItem(this.storageKey, JSON.stringify(seed));
        return seed;
    }
}
