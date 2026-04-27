import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteCardActionEvent, NoteCardActionType, NoteCardData } from '../models/note.model';

@Component({
    selector: 'app-note-card',
    standalone: true,
    imports: [CommonModule],
    template: `
        <article class="note-card" tabindex="0" [attr.aria-label]="note.title || 'Nota'" [style.background]="note.color || 'var(--surface-card)'">
            <div class="note-card__image-wrapper" *ngIf="note.imageUrl">
                <img class="note-card__image" [src]="note.imageUrl" [alt]="note.title || 'Imagen de nota'" loading="lazy" />
            </div>

            <div class="note-card__body">
                <h3 class="note-card__title">{{ note.title }}</h3>

                <div class="note-card__meta" *ngIf="note.reminderAt || note.collaborators?.length || note.pinned">
                    <span class="note-card__badge" *ngIf="note.reminderAt">
                        <i class="pi pi-clock"></i>
                        {{ formatReminder(note.reminderAt) }}
                    </span>
                    <span class="note-card__badge" *ngIf="note.collaborators?.length">
                        <i class="pi pi-user"></i>
                        {{ note.collaborators?.length }} colaborador(es)
                    </span>
                    <span class="note-card__badge" *ngIf="note.pinned">
                        <i class="pi pi-thumbtack"></i>
                        Fijada
                    </span>
                </div>

                <ul class="note-card__checklist" *ngIf="note.type === 'checklist' && note.checklistItems?.length">
                    <li class="note-card__check-item" *ngFor="let item of note.checklistItems">
                        <input
                            class="note-card__check-input"
                            type="checkbox"
                            [checked]="item.checked"
                            (change)="item.checked = !item.checked"
                        />
                        <span class="note-card__check-text" [class.note-card__check-text--done]="item.checked">{{ item.text }}</span>
                    </li>
                </ul>

                <p class="note-card__description" *ngIf="note.type !== 'checklist'">{{ note.description }}</p>
            </div>

            <footer class="note-card__actions" aria-label="Acciones de nota">
                <button type="button" class="note-card__action" aria-label="Añadir recordatorio" title="Recordatorio" (click)="emitAction('reminder', $event)">
                    <i class="pi pi-bell"></i>
                </button>
                <button type="button" class="note-card__action" aria-label="Añadir colaborador" title="Colaborador" (click)="emitAction('collaborator', $event)">
                    <i class="pi pi-users"></i>
                </button>
                <button type="button" class="note-card__action" aria-label="Cambiar color" title="Color" (click)="emitAction('color', $event)">
                    <i class="pi pi-palette"></i>
                </button>
                <button type="button" class="note-card__action" aria-label="Agregar imagen" title="Imagen" (click)="emitAction('image', $event)">
                    <i class="pi pi-image"></i>
                </button>
                <button
                    *ngIf="view !== 'trash'"
                    type="button"
                    class="note-card__action"
                    aria-label="Archivar nota"
                    [title]="view === 'archived' ? 'Desarchivar' : 'Archivar'"
                    (click)="emitAction(view === 'archived' ? 'unarchive' : 'archive', $event)"
                >
                    <i class="pi pi-inbox"></i>
                </button>
                <button *ngIf="view === 'trash'" type="button" class="note-card__action" aria-label="Restaurar nota" title="Restaurar" (click)="emitAction('restore', $event)">
                    <i class="pi pi-replay"></i>
                </button>
                <button type="button" class="note-card__action" aria-label="Más opciones" title="Más opciones" (click)="toggleMoreOptions($event)">
                    <i class="pi pi-ellipsis-v"></i>
                </button>

                <div class="note-card__menu" *ngIf="isMoreMenuOpen" (click)="$event.stopPropagation()">
                    <button type="button" class="note-card__menu-item" (click)="emitAction('edit', $event)">Editar</button>
                    <button type="button" class="note-card__menu-item" (click)="emitAction('duplicate', $event)">Duplicar</button>
                    <button type="button" class="note-card__menu-item" (click)="emitAction('togglePin', $event)">
                        {{ note.pinned ? 'Quitar fijada' : 'Fijar nota' }}
                    </button>
                    <button type="button" class="note-card__menu-item note-card__menu-item--danger" (click)="emitAction('delete', $event)">
                        {{ view === 'trash' ? 'Eliminar definitivamente' : 'Mover a papelera' }}
                    </button>
                </div>
            </footer>
        </article>
    `,
    styles: [`
        .note-card {
            display: flex;
            flex-direction: column;
            background: var(--surface-card);
            border: 1px solid rgba(100, 116, 139, 0.26);
            border-radius: 1.05rem;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(2, 6, 23, 0.08);
            transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
            position: relative;
        }

        .note-card:hover,
        .note-card:focus-within {
            transform: translateY(-3px);
            border-color: color-mix(in srgb, var(--p-primary-color) 55%, transparent);
            box-shadow: 0 10px 24px rgba(2, 6, 23, 0.16);
        }

        .note-card__image-wrapper {
            width: 100%;
            aspect-ratio: 16 / 9;
            background: color-mix(in srgb, var(--surface-card) 84%, black);
            overflow: hidden;
        }

        .note-card__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .note-card__body {
            padding: 0.9rem 1rem 0.35rem;
            display: grid;
            gap: 0.45rem;
        }

        .note-card__title,
        .note-card__description {
            margin: 0;
            overflow-wrap: anywhere;
            word-break: break-word;
        }

        .note-card__title {
            color: var(--text-color);
            font-size: 1.02rem;
            font-weight: 700;
            line-height: 1.25;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .note-card__description {
            color: var(--text-color-secondary);
            font-size: 0.93rem;
            line-height: 1.4;
            white-space: pre-wrap;
            display: -webkit-box;
            -webkit-line-clamp: 8;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .note-card__checklist {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 0.34rem;
        }

        .note-card__check-item {
            display: grid;
            grid-template-columns: 1.1rem 1fr;
            align-items: center;
            gap: 0.55rem;
            min-height: 1.4rem;
        }

        .note-card__check-input {
            width: 1rem;
            height: 1rem;
            margin: 0;
            accent-color: var(--p-primary-color);
            cursor: pointer;
        }

        .note-card__check-text {
            color: var(--text-color-secondary);
            font-size: 0.9rem;
            line-height: 1.35;
            overflow-wrap: anywhere;
            word-break: break-word;
        }

        .note-card__check-text--done {
            text-decoration: line-through;
            opacity: 0.75;
        }

        .note-card__meta {
            display: flex;
            flex-wrap: wrap;
            gap: 0.35rem;
            margin-top: -0.05rem;
        }

        .note-card__badge {
            display: inline-flex;
            align-items: center;
            gap: 0.3rem;
            padding: 0.15rem 0.45rem;
            border-radius: 999px;
            font-size: 0.75rem;
            color: var(--text-color-secondary);
            background: rgba(100, 116, 139, 0.14);
        }

        .note-card__actions {
            margin-top: auto;
            display: flex;
            align-items: center;
            gap: 0.16rem;
            padding: 0.35rem 0.45rem 0.55rem;
            border-top: 1px solid rgba(100, 116, 139, 0.2);
            opacity: 0;
            transform: translateY(5px);
            pointer-events: none;
            transition: opacity 0.18s ease, transform 0.18s ease;
            position: relative;
        }

        .note-card:hover .note-card__actions,
        .note-card:focus-within .note-card__actions {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        .note-card__action {
            width: 2rem;
            height: 2rem;
            border: none;
            border-radius: 0.6rem;
            background: transparent;
            color: var(--text-color-secondary);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background-color 0.18s ease, color 0.18s ease;
        }

        .note-card__action:hover,
        .note-card__action:focus-visible {
            background: color-mix(in srgb, var(--surface-card) 70%, var(--p-primary-color));
            color: var(--p-primary-color);
        }

        .note-card__menu {
            position: absolute;
            right: 0.55rem;
            bottom: 2.5rem;
            min-width: 9rem;
            display: grid;
            gap: 0.08rem;
            border: 1px solid rgba(100, 116, 139, 0.3);
            border-radius: 0.7rem;
            background: var(--surface-card);
            box-shadow: 0 10px 22px rgba(2, 6, 23, 0.18);
            padding: 0.28rem;
            z-index: 3;
        }

        .note-card__menu-item {
            border: none;
            border-radius: 0.45rem;
            background: transparent;
            color: var(--text-color);
            text-align: left;
            padding: 0.4rem 0.45rem;
            cursor: pointer;
            font-size: 0.82rem;
        }

        .note-card__menu-item:hover,
        .note-card__menu-item:focus-visible {
            background: rgba(100, 116, 139, 0.16);
            outline: none;
        }

        .note-card__menu-item--danger {
            color: #b91c1c;
        }
    `]
})
export class NoteCardComponent {
    @Input({ required: true }) note!: NoteCardData;
    @Input() view: 'active' | 'archived' | 'trash' | 'reminders' = 'active';
    @Output() action = new EventEmitter<NoteCardActionEvent>();

    isMoreMenuOpen = false;

    @HostListener('document:click')
    closeMenu(): void {
        this.isMoreMenuOpen = false;
    }

    toggleMoreOptions(event: MouseEvent): void {
        event.stopPropagation();
        this.isMoreMenuOpen = !this.isMoreMenuOpen;
    }

    emitAction(type: NoteCardActionType, event: MouseEvent): void {
        event.stopPropagation();
        this.isMoreMenuOpen = false;
        this.action.emit({ type, note: this.note });
    }

    formatReminder(value: string): string {
        return value.replace('T', ' ').slice(0, 16);
    }
}
