import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteCardComponent } from './components/note-card.component';
import { NoteCardActionEvent, NoteCardData, NoteChecklistItem } from './models/note.model';
import { NotesStoreService } from './services/notes-store.service';
import { SearchService } from '../../service/search.service';
import { NoteService } from '../../service/note/note.service';

interface DraftChecklistItem extends NoteChecklistItem { }

@Component({
    selector: 'app-notas',
    standalone: true,
    imports: [CommonModule, FormsModule, NoteCardComponent],
    template: `
        <section class="notes-page">
            <header class="notes-page__header">
                <div class="flex items-center gap-4 mb-4">
                    <i class="pi pi-lightbulb text-3xl text-yellow-500"></i>
                    <h1 class="notes-page__title m-0">Mis Notas</h1>
                </div>
                <p class="notes-page__subtitle">Tus ideas recientes en un solo vistazo.</p>
            </header>

            <section class="note-creator" [class.note-creator--expanded]="isCreatorExpanded">
                <button
                    type="button"
                    class="note-creator__collapsed"
                    *ngIf="!isCreatorExpanded"
                    (click)="expandCreator()"
                >
                    Tomar una nota...
                </button>

                <div class="note-creator__expanded" *ngIf="isCreatorExpanded">
                    <div class="note-creator__modes" role="tablist" aria-label="Tipo de nota">
                        <button
                            type="button"
                            class="note-creator__mode"
                            [class.note-creator__mode--active]="draftType === 'text'"
                            (click)="setDraftType('text')"
                        >
                            Nota
                        </button>
                        <button
                            type="button"
                            class="note-creator__mode"
                            [class.note-creator__mode--active]="draftType === 'checklist'"
                            (click)="setDraftType('checklist')"
                        >
                            Lista
                        </button>
                    </div>

                    <input
                        class="note-creator__input note-creator__input--title"
                        type="text"
                        placeholder="Titulo"
                        [(ngModel)]="draftTitle"
                    />

                    <textarea
                        *ngIf="draftType === 'text'"
                        class="note-creator__input note-creator__input--body"
                        placeholder="Escribe una nota"
                        [(ngModel)]="draftDescription"
                    ></textarea>

                    <div class="checklist-editor" *ngIf="draftType === 'checklist'">
                        <label class="checklist-editor__row" *ngFor="let item of draftChecklist; let i = index">
                            <input
                                type="checkbox"
                                class="checklist-editor__checkbox"
                                [(ngModel)]="item.checked"
                            />
                            <input
                                type="text"
                                class="checklist-editor__text"
                                placeholder="Elemento de lista"
                                [(ngModel)]="item.text"
                                (keydown.enter)="onChecklistEnter(i, $event)"
                            />
                        </label>
                    </div>

                    <div class="note-creator__footer">
                        <button type="button" class="note-creator__close" (click)="closeCreator()">Cerrar</button>
                    </div>
                </div>
            </section>

            <input
                #imagePicker
                type="file"
                accept="image/*"
                class="note-hidden-file"
                (change)="onImagePicked($event)"
            />

            <!-- Modales (Recordatorio y Edición) -->
            <section class="note-modal-backdrop" *ngIf="reminderTargetId !== null" (click)="closeReminderPicker()">
                <article class="note-modal" (click)="$event.stopPropagation()">
                    <h3>Seleccionar recordatorio</h3>
                    <input type="datetime-local" [(ngModel)]="reminderDraft" class="note-modal__input" />
                    <div class="note-modal__actions">
                        <button type="button" class="note-modal__btn" (click)="closeReminderPicker()">Cancelar</button>
                        <button type="button" class="note-modal__btn note-modal__btn--primary" (click)="saveReminder()">Guardar</button>
                    </div>
                </article>
            </section>

            <section class="note-modal-backdrop" *ngIf="editTargetId !== null" (click)="closeEditor()">
                <article class="note-modal" (click)="$event.stopPropagation()">
                    <h3>Editar nota</h3>
                    <input type="text" class="note-modal__input" placeholder="Titulo" [(ngModel)]="editTitle" />
                    <textarea class="note-modal__input note-modal__textarea" placeholder="Contenido" [(ngModel)]="editDescription"></textarea>
                    <div class="note-modal__actions">
                        <button type="button" class="note-modal__btn" (click)="closeEditor()">Cancelar</button>
                        <button type="button" class="note-modal__btn note-modal__btn--primary" (click)="saveEdit()">Guardar</button>
                    </div>
                </article>
            </section>

            <!-- Grid de Notas -->
            <div class="notes-grid" *ngIf="notasFiltradas.length; else emptyState">
                <app-note-card
                    *ngFor="let note of notasFiltradas; trackBy: trackById"
                    [note]="note"
                    view="active"
                    (action)="onCardAction($event)"
                ></app-note-card>
            </div>

            <ng-template #emptyState>
                <div class="flex flex-col items-center justify-center mt-32 opacity-40 animate-fadein">
                    <i class="pi pi-pencil text-8xl mb-6"></i>
                    <p class="text-2xl font-light">
                        {{ terminoBusqueda ? 'No se encontraron notas que coincidan con tu búsqueda' : 'Las notas que agregues aparecerán aquí' }}
                    </p>
                </div>
            </ng-template>
        </section>
    `,
    styles: [`
        .notes-page {
            min-height: 100%;
            padding: clamp(1rem, 2vw, 1.5rem);
        }
        .notes-page__header { margin-bottom: 2rem; }
        .notes-page__title { font-size: clamp(1.4rem, 2.5vw, 1.85rem); font-weight: 700; }
        .notes-page__subtitle { color: var(--text-color-secondary); margin-top: 0.5rem; }

        .note-creator {
            max-width: 42rem;
            margin: 0 auto 3rem;
            border: 1px solid rgba(100, 116, 139, 0.25);
            border-radius: 1rem;
            background: var(--surface-card);
            box-shadow: 0 4px 12px rgba(2, 6, 23, 0.05);
            transition: all 0.2s ease;
        }
        .note-creator--expanded {
            box-shadow: 0 12px 28px rgba(2, 6, 23, 0.12);
        }
        .note-creator__collapsed {
            width: 100%; border: none; background: transparent;
            padding: 1rem 1.2rem; text-align: left; color: var(--text-color-secondary);
            cursor: text; font-size: 1rem;
        }
        .note-creator__expanded { padding: 1rem; }
        .note-creator__modes { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
        .note-creator__mode {
            border: none; background: rgba(100, 116, 139, 0.1);
            padding: 0.4rem 1rem; border-radius: 20px; cursor: pointer;
            font-size: 0.85rem; color: var(--text-color-secondary);
        }
        .note-creator__mode--active {
            background: var(--p-primary-color); color: white;
        }
        .note-creator__input {
            width: 100%; border: none; background: transparent;
            padding: 0.5rem 0; outline: none; font-family: inherit;
        }
        .note-creator__input--title { font-size: 1.1rem; font-weight: 600; }
        .note-creator__input--body { min-height: 5rem; resize: none; }
        .note-creator__footer { display: flex; justify-content: flex-end; margin-top: 1rem; }
        .note-creator__close {
            background: transparent; border: none; padding: 0.5rem 1rem;
            border-radius: 8px; cursor: pointer; font-weight: 600;
        }
        .note-creator__close:hover { background: rgba(100, 116, 139, 0.1); }

        .checklist-editor { display: grid; gap: 0.25rem; }
        .checklist-editor__row { display: flex; align-items: center; gap: 0.75rem; }
        .checklist-editor__text { border: none; background: transparent; outline: none; width: 100%; }

        .notes-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 1.5rem;
            align-items: start;
        }
        .note-modal-backdrop {
            position: fixed; inset: 0; background: rgba(0,0,0,0.4);
            display: grid; place-items: center; z-index: 1000;
        }
        .note-modal {
            background: var(--surface-card); padding: 1.5rem;
            border-radius: 12px; width: 100%; max-width: 400px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        .note-modal__input { width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 1rem; }
        .note-modal__actions { display: flex; justify-content: flex-end; gap: 0.5rem; }
        .note-hidden-file { display: none; }
    `]
})
export class Notas implements OnInit {
    private readonly store = inject(NotesStoreService);
    private readonly searchService = inject(SearchService);
    private readonly noteService = inject(NoteService); // Disponible para futura migración completa
    private readonly cdr = inject(ChangeDetectorRef);

    private readonly noteColors = ['#ffffff', '#fff8d8', '#e8f0fe', '#e6f4ea', '#fce8e6', '#f3e8ff'];

    @ViewChild('imagePicker') imagePicker?: ElementRef<HTMLInputElement>;

    notasOriginales: NoteCardData[] = [];
    notasFiltradas: NoteCardData[] = [];
    terminoBusqueda = '';

    isCreatorExpanded = false;
    draftType: 'text' | 'checklist' = 'text';
    draftTitle = '';
    draftDescription = '';
    draftChecklist: DraftChecklistItem[] = [{ text: '', checked: false }];

    imageTargetId: number | null = null;
    reminderTargetId: number | null = null;
    reminderDraft = '';
    editTargetId: number | null = null;
    editTitle = '';
    editDescription = '';

    ngOnInit() {
        this.cargarNotas();
        this.searchService.search$.subscribe(query => {
            this.terminoBusqueda = query;
            this.filtrar();
        });
    }

    cargarNotas() {
        this.notasOriginales = this.store.getByStatus('active');
        this.filtrar();
    }

    filtrar() {
        const q = this.terminoBusqueda.toLowerCase().trim();
        if (!q) {
            this.notasFiltradas = [...this.notasOriginales];
        } else {
            this.notasFiltradas = this.notasOriginales.filter(n =>
                (n.title || '').toLowerCase().includes(q) ||
                (n.description || '').toLowerCase().includes(q)
            );
        }
        this.cdr.detectChanges();
    }

    expandCreator(): void {
        this.isCreatorExpanded = true;
    }

    setDraftType(type: 'text' | 'checklist'): void {
        this.draftType = type;
        if (type === 'checklist' && this.draftChecklist.length === 0) {
            this.draftChecklist = [{ text: '', checked: false }];
        }
    }

    onChecklistEnter(index: number, event: Event): void {
        event.preventDefault();
        if (this.draftChecklist[index].text.trim()) {
            this.draftChecklist.splice(index + 1, 0, { text: '', checked: false });
        }
    }

    closeCreator(): void {
        const note = this.buildDraftNote();
        if (note) {
            this.store.create(note);
            this.cargarNotas();
        }
        this.resetCreator();
    }

    onCardAction(action: NoteCardActionEvent): void {
        const note = action.note;
        switch (action.type) {
            case 'reminder':
                this.reminderTargetId = note.id;
                this.reminderDraft = note.reminderAt || '';
                break;
            case 'color':
                this.store.update(note.id, { color: this.nextColor(note.color) });
                this.cargarNotas();
                break;
            case 'archive':
                this.store.setStatus(note.id, 'archived');
                this.cargarNotas();
                break;
            case 'delete':
                this.store.setStatus(note.id, 'trash');
                this.cargarNotas();
                break;
            case 'togglePin':
                this.store.update(note.id, { pinned: !note.pinned });
                this.cargarNotas();
                break;
            case 'duplicate':
                this.store.duplicate(note.id);
                this.cargarNotas();
                break;
            case 'edit':
                this.editTargetId = note.id;
                this.editTitle = note.title;
                this.editDescription = note.description;
                break;
            case 'image':
                this.imageTargetId = note.id;
                this.imagePicker?.nativeElement.click();
                break;
        }
    }

    onImagePicked(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file || this.imageTargetId === null) return;

        const reader = new FileReader();
        reader.onload = () => {
            this.store.update(this.imageTargetId as number, { imageUrl: String(reader.result) });
            this.imageTargetId = null;
            this.cargarNotas();
        };
        reader.readAsDataURL(file);
        input.value = '';
    }

    saveReminder(): void {
        if (this.reminderTargetId !== null) {
            this.store.update(this.reminderTargetId, { reminderAt: this.reminderDraft || undefined });
            this.closeReminderPicker();
            this.cargarNotas();
        }
    }

    closeReminderPicker(): void { this.reminderTargetId = null; this.reminderDraft = ''; }

    saveEdit(): void {
        if (this.editTargetId !== null) {
            this.store.update(this.editTargetId, {
                title: this.editTitle.trim() || 'Nota sin titulo',
                description: this.editDescription.trim()
            });
            this.closeEditor();
            this.cargarNotas();
        }
    }

    closeEditor(): void { this.editTargetId = null; this.editTitle = ''; this.editDescription = ''; }

    private nextColor(current?: string): string {
        const currentIndex = this.noteColors.indexOf(current || '#ffffff');
        return this.noteColors[(currentIndex + 1) % this.noteColors.length];
    }

    private buildDraftNote(): Omit<NoteCardData, 'id'> | null {
        if (this.draftType === 'checklist') {
            const items = this.draftChecklist.filter(i => i.text.trim());
            if (!this.draftTitle.trim() && !items.length) return null;
            return { type: 'checklist', title: this.draftTitle.trim() || 'Lista sin titulo', description: '', checklistItems: items, status: 'active' };
        }
        if (!this.draftTitle.trim() && !this.draftDescription.trim()) return null;
        return { type: 'text', title: this.draftTitle.trim() || 'Nota sin titulo', description: this.draftDescription.trim(), status: 'active' };
    }

    private resetCreator(): void {
        this.isCreatorExpanded = false;
        this.draftType = 'text';
        this.draftTitle = '';
        this.draftDescription = '';
        this.draftChecklist = [{ text: '', checked: false }];
    }

    trackById(_: number, note: NoteCardData): number { return note.id; }
}
