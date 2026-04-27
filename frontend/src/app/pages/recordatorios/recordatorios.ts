import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NoteCardComponent } from '../notas/components/note-card.component';
import { NoteCardActionEvent, NoteCardData } from '../notas/models/note.model';
import { NotesStoreService } from '../notas/services/notes-store.service';

@Component({
    selector: 'app-recordatorios',
    standalone: true,
    imports: [CommonModule, NoteCardComponent],
    template: `
        <section class="p-6">
            <h1 class="text-2xl font-bold mb-2">Recordatorios</h1>
            <p class="text-color-secondary mb-4">Notas con fecha y hora de recordatorio.</p>

            <div class="notes-grid" *ngIf="reminderNotes.length; else emptyState">
                <app-note-card
                    *ngFor="let note of reminderNotes; trackBy: trackById"
                    [note]="note"
                    view="reminders"
                    (action)="onCardAction($event)"
                ></app-note-card>
            </div>

            <ng-template #emptyState>
                <div class="bg-surface-0 border rounded p-6">Aun no tienes recordatorios configurados.</div>
            </ng-template>
        </section>
    `,
    styles: [`
        .notes-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 0.9rem;
        }
    `]
})
export class Recordatorios {
    private readonly store = inject(NotesStoreService);

    get reminderNotes(): NoteCardData[] {
        return this.store.getReminderNotes();
    }

    onCardAction(event: NoteCardActionEvent): void {
        switch (event.type) {
            case 'archive':
                this.store.setStatus(event.note.id, 'archived');
                break;
            case 'delete':
                this.store.setStatus(event.note.id, 'trash');
                break;
            case 'togglePin':
                this.store.update(event.note.id, { pinned: !event.note.pinned });
                break;
            case 'duplicate':
                this.store.duplicate(event.note.id);
                break;
            case 'edit': {
                const title = window.prompt('Editar titulo', event.note.title);
                if (title === null) {
                    return;
                }
                const description = window.prompt('Editar contenido', event.note.description);
                if (description === null) {
                    return;
                }
                this.store.update(event.note.id, { title: title.trim() || 'Nota sin titulo', description: description.trim() });
                break;
            }
            case 'reminder': {
                const reminder = window.prompt('Fecha y hora (YYYY-MM-DDTHH:mm)', event.note.reminderAt || '');
                if (reminder === null) {
                    return;
                }
                this.store.update(event.note.id, { reminderAt: reminder || undefined });
                break;
            }
            case 'color':
            case 'collaborator':
            case 'image':
            case 'restore':
            case 'unarchive':
                break;
        }
    }

    trackById(_: number, note: NoteCardData): number {
        return note.id;
    }
}
