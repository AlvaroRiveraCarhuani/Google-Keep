<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteCardComponent } from './components/note-card.component';
import { NoteCardActionEvent, NoteCardData, NoteChecklistItem } from './models/note.model';
import { NotesStoreService } from './services/notes-store.service';

interface DraftChecklistItem extends NoteChecklistItem {}
=======
import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../service/note/note.service';
import { SearchService } from '../../service/search.service';
import { MessageService } from 'primeng/api';
import { NotaForm } from './components/nota-form';
import { NotaCard } from './components/nota-card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
>>>>>>> 889a5789d2d7727f44b3c0487d9389200eafbe9d

@Component({
    standalone: true,
<<<<<<< HEAD
    imports: [CommonModule, FormsModule, NoteCardComponent],
    template: `
        <section class="notes-page">
            <header class="notes-page__header">
                <h1 class="notes-page__title">Notas</h1>
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
                        [value]="draftTitle"
                        (input)="draftTitle = readInput($event)"
                    />

                    <textarea
                        *ngIf="draftType === 'text'"
                        class="note-creator__input note-creator__input--body"
                        placeholder="Escribe una nota"
                        [value]="draftDescription"
                        (input)="draftDescription = readInput($event)"
                    ></textarea>

                    <div class="checklist-editor" *ngIf="draftType === 'checklist'">
                        <label class="checklist-editor__row" *ngFor="let item of draftChecklist; let i = index">
                            <input
                                type="checkbox"
                                class="checklist-editor__checkbox"
                                [checked]="item.checked"
                                (change)="item.checked = !item.checked"
                            />
                            <input
                                type="text"
                                class="checklist-editor__text"
                                placeholder="Elemento de lista"
                                [value]="item.text"
                                (input)="updateChecklistItem(i, $event)"
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

            <div class="notes-grid">
                <app-note-card
                    *ngFor="let note of visibleNotes; trackBy: trackById"
                    [note]="note"
                    view="active"
                    (action)="onCardAction($event)"
                ></app-note-card>
            </div>
        </section>
    `,
    styles: [`
        .notes-page {
            min-height: 100%;
            padding: clamp(1rem, 2vw, 1.5rem);
        }

        .notes-page__header {
            margin-bottom: 1rem;
        }

        .notes-page__title {
            margin: 0;
            font-size: clamp(1.4rem, 2.5vw, 1.85rem);
            line-height: 1.15;
            letter-spacing: -0.015em;
        }

        .notes-page__subtitle {
            margin: 0.4rem 0 0;
            color: var(--text-color-secondary);
        }

        .note-creator {
            max-width: 42rem;
            margin: 0 auto 1.2rem;
            border: 1px solid rgba(100, 116, 139, 0.25);
            border-radius: 1rem;
            background: var(--surface-card);
            box-shadow: 0 6px 18px rgba(2, 6, 23, 0.07);
            transition: box-shadow 0.22s ease, border-color 0.22s ease;
        }

        .note-creator--expanded {
            border-color: color-mix(in srgb, var(--p-primary-color) 50%, transparent);
            box-shadow: 0 16px 34px rgba(2, 6, 23, 0.16);
        }

        .note-creator__collapsed {
            width: 100%;
            border: none;
            background: transparent;
            color: var(--text-color-secondary);
            text-align: left;
            padding: 0.95rem 1.1rem;
            border-radius: inherit;
            cursor: text;
        }

        .note-creator__expanded {
            overflow: hidden;
            animation: expandCreator 0.22s ease;
            padding: 0.55rem 0.7rem 0.35rem;
        }

        @keyframes expandCreator {
            from {
                opacity: 0;
                transform: translateY(-4px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .note-creator__modes {
            display: inline-flex;
            gap: 0.3rem;
            margin-bottom: 0.45rem;
        }

        .note-creator__mode {
            border: none;
            background: transparent;
            color: var(--text-color-secondary);
            border-radius: 999px;
            padding: 0.34rem 0.7rem;
            cursor: pointer;
            font-size: 0.85rem;
        }

        .note-creator__mode--active {
            color: var(--p-primary-color);
            background: color-mix(in srgb, var(--surface-card) 68%, var(--p-primary-color));
            font-weight: 600;
        }

        .note-creator__input {
            width: 100%;
            border: none;
            background: transparent;
            color: var(--text-color);
            padding: 0.46rem 0.4rem;
            outline: none;
            resize: none;
            font-family: inherit;
        }

        .note-creator__input--title {
            font-size: 1rem;
            font-weight: 600;
        }

        .note-creator__input--body {
            min-height: 4.7rem;
            line-height: 1.4;
            font-size: 0.95rem;
        }

        .checklist-editor {
            display: grid;
            gap: 0.24rem;
            margin-top: 0.15rem;
        }

        .checklist-editor__row {
            display: grid;
            grid-template-columns: 1.2rem 1fr;
            align-items: center;
            gap: 0.55rem;
            min-height: 2rem;
            padding: 0 0.25rem;
        }

        .checklist-editor__checkbox {
            width: 1rem;
            height: 1rem;
            margin: 0;
            accent-color: var(--p-primary-color);
        }

        .checklist-editor__text {
            width: 100%;
            border: none;
            background: transparent;
            color: var(--text-color);
            outline: none;
            padding: 0.3rem 0;
            font-size: 0.93rem;
        }

        .note-creator__footer {
            display: flex;
            justify-content: flex-end;
            margin-top: 0.2rem;
        }

        .note-creator__close {
            border: none;
            border-radius: 0.55rem;
            background: transparent;
            color: var(--text-color-secondary);
            padding: 0.45rem 0.7rem;
            cursor: pointer;
        }

        .note-creator__close:hover,
        .note-creator__close:focus-visible {
            background: color-mix(in srgb, var(--surface-card) 72%, var(--p-primary-color));
            color: var(--p-primary-color);
            outline: none;
        }

        .notes-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
            gap: 0.85rem;
            align-items: start;
        }

        .note-hidden-file {
            display: none;
        }

        .note-modal-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(2, 6, 23, 0.32);
            display: grid;
            place-items: center;
            z-index: 1000;
            padding: 1rem;
        }

        .note-modal {
            width: min(25rem, 100%);
            border-radius: 0.9rem;
            background: var(--surface-card);
            border: 1px solid rgba(100, 116, 139, 0.35);
            box-shadow: 0 18px 38px rgba(2, 6, 23, 0.26);
            padding: 1rem;
            display: grid;
            gap: 0.75rem;
        }

        .note-modal h3 {
            margin: 0;
            font-size: 1rem;
        }

        .note-modal__input {
            width: 100%;
            border: 1px solid rgba(100, 116, 139, 0.35);
            border-radius: 0.55rem;
            padding: 0.52rem 0.6rem;
            background: transparent;
            color: var(--text-color);
        }

        .note-modal__textarea {
            min-height: 7.5rem;
            resize: vertical;
        }

        .note-modal__actions {
            display: flex;
            justify-content: flex-end;
            gap: 0.4rem;
        }

        .note-modal__btn {
            border: none;
            border-radius: 0.55rem;
            padding: 0.45rem 0.75rem;
            background: rgba(100, 116, 139, 0.17);
            color: var(--text-color);
            cursor: pointer;
        }

        .note-modal__btn--primary {
            background: var(--p-primary-color);
            color: #fff;
        }

        @media (min-width: 1280px) {
            .notes-grid {
                grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
            }
        }
    `]
})
export class Notas {
    private readonly store = inject(NotesStoreService);
    private readonly noteColors = ['#ffffff', '#fff8d8', '#e8f0fe', '#e6f4ea', '#fce8e6', '#f3e8ff'];

    @ViewChild('imagePicker') imagePicker?: ElementRef<HTMLInputElement>;

    isCreatorExpanded = false;
    draftType: 'text' | 'checklist' = 'text';
    draftTitle = '';
    draftDescription = '';
    draftChecklist: DraftChecklistItem[] = [{ text: '', checked: false }];

    get visibleNotes(): NoteCardData[] {
        return this.store.getByStatus('active');
    }

    imageTargetId: number | null = null;
    reminderTargetId: number | null = null;
    reminderDraft = '';
    editTargetId: number | null = null;
    editTitle = '';
    editDescription = '';

    expandCreator(): void {
        this.isCreatorExpanded = true;
    }

    setDraftType(type: 'text' | 'checklist'): void {
        this.draftType = type;
        if (type === 'checklist' && this.draftChecklist.length === 0) {
            this.draftChecklist = [{ text: '', checked: false }];
        }
    }

    readInput(event: Event): string {
        return (event.target as HTMLInputElement | HTMLTextAreaElement).value;
    }

    updateChecklistItem(index: number, event: Event): void {
        this.draftChecklist[index].text = this.readInput(event);
    }

    onChecklistEnter(index: number, event: Event): void {
        event.preventDefault();
        const current = this.draftChecklist[index];
        if (current.text.trim()) {
            this.draftChecklist.splice(index + 1, 0, { text: '', checked: false });
        }
    }

    closeCreator(): void {
        const note = this.buildDraftNote();
        if (note) {
            this.store.create(note);
        }
        this.resetCreator();
    }

    onCardAction(action: NoteCardActionEvent): void {
        const note = action.note;

        switch (action.type) {
            case 'reminder': {
                this.reminderTargetId = note.id;
                this.reminderDraft = note.reminderAt || '';
                break;
            }
            case 'collaborator': {
                const value = window.prompt('Nombre o correo del colaborador', 'nuevo.colaborador@correo.com');
                if (!value) {
                    return;
                }
                const collaborator = value.trim();
                if (!collaborator) {
                    return;
                }
                const collaborators = note.collaborators || [];
                if (!collaborators.includes(collaborator)) {
                    this.store.update(note.id, { collaborators: [...collaborators, collaborator] });
                }
                break;
            }
            case 'color': {
                this.store.update(note.id, { color: this.nextColor(note.color) });
                break;
            }
            case 'image': {
                this.imageTargetId = note.id;
                this.imagePicker?.nativeElement.click();
                break;
            }
            case 'archive': {
                this.store.setStatus(note.id, 'archived');
                break;
            }
            case 'unarchive': {
                this.store.setStatus(note.id, 'active');
                break;
            }
            case 'restore': {
                this.store.setStatus(note.id, 'active');
                break;
            }
            case 'duplicate': {
                this.store.duplicate(note.id);
                break;
            }
            case 'delete': {
                if ((note.status || 'active') === 'trash') {
                    this.store.deletePermanently(note.id);
                } else {
                    this.store.setStatus(note.id, 'trash');
                }
                break;
            }
            case 'togglePin': {
                this.store.update(note.id, { pinned: !note.pinned });
                break;
            }
            case 'edit': {
                this.editTargetId = note.id;
                this.editTitle = note.title;
                this.editDescription = note.description;
                break;
            }
        }
    }

    onImagePicked(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file || this.imageTargetId === null) {
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            this.store.update(this.imageTargetId as number, { imageUrl: String(reader.result) });
            this.imageTargetId = null;
        };
        reader.readAsDataURL(file);
        input.value = '';
    }

    saveReminder(): void {
        if (this.reminderTargetId === null) {
            return;
        }

        this.store.update(this.reminderTargetId, { reminderAt: this.reminderDraft || undefined });
        this.closeReminderPicker();
    }

    closeReminderPicker(): void {
        this.reminderTargetId = null;
        this.reminderDraft = '';
    }

    saveEdit(): void {
        if (this.editTargetId === null) {
            return;
        }

        this.store.update(this.editTargetId, {
            title: this.editTitle.trim() || 'Nota sin titulo',
            description: this.editDescription.trim()
        });
        this.closeEditor();
    }

    closeEditor(): void {
        this.editTargetId = null;
        this.editTitle = '';
        this.editDescription = '';
    }

    private nextColor(current?: string): string {
        const currentIndex = this.noteColors.findIndex((color) => color.toLowerCase() === (current || '').toLowerCase());
        const nextIndex = (currentIndex + 1) % this.noteColors.length;
        return this.noteColors[nextIndex];
    }

    private buildDraftNote(): Omit<NoteCardData, 'id'> | null {
        if (this.draftType === 'checklist') {
            const items = this.draftChecklist
                .map((item) => ({ ...item, text: item.text.trim() }))
                .filter((item) => item.text.length > 0);

            if (!this.draftTitle.trim() && items.length === 0) {
                return null;
            }

            return {
                type: 'checklist',
                title: this.draftTitle.trim() || 'Lista sin titulo',
                description: '',
                checklistItems: items,
                collaborators: [],
                status: 'active'
            };
        }

        const title = this.draftTitle.trim();
        const description = this.draftDescription.trim();

        if (!title && !description) {
            return null;
        }

        return {
            type: 'text',
            title: title || 'Nota sin titulo',
            description,
            collaborators: [],
            status: 'active'
        };
    }

    private resetCreator(): void {
        this.isCreatorExpanded = false;
        this.draftType = 'text';
        this.draftTitle = '';
        this.draftDescription = '';
        this.draftChecklist = [{ text: '', checked: false }];
    }

    trackById(_: number, note: NoteCardData): number {
        return note.id;
    }
}
=======
    imports: [CommonModule, FormsModule, NotaForm, NotaCard, DialogModule, InputTextModule, TextareaModule, ButtonModule],
    template: `
        <div class="p-6 max-w-[1600px] mx-auto">
            <div class="flex items-center gap-4 mb-8">
                <i class="pi pi-lightbulb text-3xl text-yellow-500"></i>
                <h2 class="text-3xl font-bold text-surface-900 dark:text-surface-0 m-0">Mis Notas</h2>
            </div>
            
            <div class="flex justify-center mb-12">
                <app-nota-form (onSave)="crearNota($event)" class="w-full max-w-2xl"></app-nota-form>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                @for (nota of notas; track nota.id) {
                    <app-nota-card 
                        [nota]="nota" 
                        (onDelete)="eliminarNota($event)" 
                        (onEdit)="abrirEdicion($event)"
                        (onPin)="togglePin($event)">
                    </app-nota-card>
                }
            </div>

            @if (notas.length === 0 && notasOriginales.length > 0) {
                <div class="flex flex-col items-center justify-center mt-32 animate-fadein">
                    <div class="w-32 h-32 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center mb-6">
                        <i class="pi pi-search text-5xl text-surface-400"></i>
                    </div>
                    <p class="text-xl text-surface-500 font-medium">No se encontraron notas que coincidan con tu búsqueda</p>
                </div>
            }

            @if (notasOriginales.length === 0) {
                <div class="flex flex-col items-center justify-center mt-32 opacity-40 animate-fadein">
                    <i class="pi pi-pencil text-8xl mb-6"></i>
                    <p class="text-2xl font-light">Las notas que agregues aparecerán aquí</p>
                </div>
            }

            <p-dialog [(visible)]="displayEditDialog" [modal]="true" [style]="{ width: '40rem' }" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }" [dismissableMask]="true" [showHeader]="false">
                <div [ngClass]="notaEnEdicion.color ? notaEnEdicion.color : 'bg-surface-0 dark:bg-surface-900'" class="flex flex-col gap-4 p-4 mt-2 rounded-t-xl transition-colors duration-200">
                    <input pInputText placeholder="Título" [(ngModel)]="notaEnEdicion.title" class="w-full border-none font-bold text-xl p-0 focus:ring-0 bg-transparent" />
                    <textarea pInputTextarea placeholder="Contenido" [(ngModel)]="notaEnEdicion.content" rows="6" class="w-full border-none resize-none p-0 focus:ring-0 bg-transparent" [autoResize]="true"></textarea>
                </div>
                <div [ngClass]="notaEnEdicion.color ? notaEnEdicion.color : 'bg-surface-0 dark:bg-surface-900'" class="flex justify-between items-center px-4 pb-4 rounded-b-xl transition-colors duration-200">
                    <div class="flex gap-2">
                        @for (color of paleta; track color) {
                            <div 
                                class="w-6 h-6 rounded-full cursor-pointer border-2 transition-transform hover:scale-110"
                                [ngClass]="color ? color : 'bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700'"
                                [class.border-primary]="notaEnEdicion.color === color"
                                (click)="notaEnEdicion.color = color">
                            </div>
                        }
                    </div>
                    <div class="flex gap-2">
                        <p-button label="Cerrar" [text]="true" severity="secondary" (click)="displayEditDialog = false"></p-button>
                        <p-button label="Guardar" [text]="true" (click)="guardarEdicion()"></p-button>
                    </div>
                </div>
            </p-dialog>
        </div>
    `
})
export class Notas implements OnInit {
    private noteService = inject(NoteService);
    private searchService = inject(SearchService);
    private messageService = inject(MessageService);
    private cdr = inject(ChangeDetectorRef);

    notasOriginales: any[] = [];
    notas: any[] = [];
    displayEditDialog = false;
    notaEnEdicion: any = {};
    terminoBusqueda: string = '';

    paleta = [
        '',
        'bg-red-100 dark:bg-red-900/40',
        'bg-orange-100 dark:bg-orange-900/40',
        'bg-yellow-100 dark:bg-yellow-900/40',
        'bg-green-100 dark:bg-green-900/40',
        'bg-blue-100 dark:bg-blue-900/40',
        'bg-purple-100 dark:bg-purple-900/40'
    ];

    ngOnInit() {
        this.cargarNotas();
        this.searchService.search$.subscribe(query => {
            this.terminoBusqueda = query;
            this.filtrar();
        });
    }

    cargarNotas() {
        this.noteService.getNotes().subscribe((res: any) => {
            this.notasOriginales = res;
            this.filtrar();
        });
    }

    filtrar() {
        const q = this.terminoBusqueda.toLowerCase().trim();
        if (!q) {
            this.notas = [...this.notasOriginales];
        } else {
            this.notas = this.notasOriginales.filter(n =>
                (n.title || '').toLowerCase().includes(q) ||
                (n.content || '').toLowerCase().includes(q)
            );
        }
        this.cdr.detectChanges();
    }

    crearNota(nota: any) {
        this.noteService.createNote(nota).subscribe(() => {
            this.cargarNotas();
            this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Nota creada' });
        });
    }

    togglePin(nota: any) {
        const nuevoEstado = !nota.is_pinned;
        this.noteService.updateNote(nota.id, { is_pinned: nuevoEstado }).subscribe(() => {
            this.cargarNotas();
            this.messageService.add({
                severity: 'info',
                summary: nuevoEstado ? 'Fijada' : 'Desfijada',
                detail: nuevoEstado ? 'La nota aparecerá arriba' : 'Nota movida'
            });
        });
    }

    eliminarNota(id: number) {
        this.noteService.deleteNote(id).subscribe(() => {
            this.cargarNotas();
            this.messageService.add({ severity: 'warn', summary: 'Papelera', detail: 'Nota movida a la papelera' });
        });
    }

    abrirEdicion(nota: any) {
        this.notaEnEdicion = { ...nota };
        this.displayEditDialog = true;
        this.cdr.detectChanges();
    }

    guardarEdicion() {
        const { id, title, content, color, is_pinned } = this.notaEnEdicion;
        this.noteService.updateNote(id, { title, content, color, is_pinned }).subscribe(() => {
            this.displayEditDialog = false;
            this.cargarNotas();
            this.messageService.add({ severity: 'success', summary: 'Actualizada', detail: 'Cambios guardados' });
        });
    }
}
>>>>>>> 889a5789d2d7727f44b3c0487d9389200eafbe9d
