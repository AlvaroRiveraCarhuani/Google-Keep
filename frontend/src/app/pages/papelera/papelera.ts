import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NoteCardComponent } from '../notas/components/note-card.component';
import { NoteCardActionEvent, NoteCardData } from '../notas/models/note.model';
import { NotesStoreService } from '../notas/services/notes-store.service';

@Component({
    selector: 'app-papelera',
    standalone: true,
    imports: [CommonModule, NoteCardComponent],
    template: `
        <section class="p-6">
            <h1 class="text-2xl font-bold mb-2">Papelera</h1>
            <p class="text-color-secondary mb-4">Notas eliminadas. Puedes restaurarlas o borrarlas definitivamente.</p>

            <div class="notes-grid" *ngIf="trashNotes.length; else emptyState">
                <app-note-card
                    *ngFor="let note of trashNotes; trackBy: trackById"
                    [note]="note"
                    view="trash"
                    (action)="onCardAction($event)"
                ></app-note-card>
            </div>

            <ng-template #emptyState>
                <div class="bg-surface-0 border rounded p-6">La papelera esta vacia.</div>
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
export class Papelera {
    private readonly store = inject(NotesStoreService);

    get trashNotes(): NoteCardData[] {
        return this.store.getByStatus('trash');
    }

    onCardAction(event: NoteCardActionEvent): void {
        switch (event.type) {
            case 'restore':
                this.store.setStatus(event.note.id, 'active');
                break;
            case 'delete':
                this.store.deletePermanently(event.note.id);
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
            case 'archive':
            case 'unarchive':
            case 'reminder':
            case 'color':
            case 'collaborator':
            case 'image':
            case 'togglePin':
                break;
        }
    }

    trackById(_: number, note: NoteCardData): number {
        return note.id;
    }
}
