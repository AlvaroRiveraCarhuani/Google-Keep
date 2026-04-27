import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { NoteCardComponent } from '../notas/components/note-card.component';
import { NoteCardActionEvent, NoteCardData } from '../notas/models/note.model';
import { NotesStoreService } from '../notas/services/notes-store.service';
import { SearchService } from '../../service/search.service';

@Component({
    selector: 'app-recordatorios',
    standalone: true,
    imports: [CommonModule, NoteCardComponent],
    template: `
        <div class="p-6 max-w-[1600px] mx-auto">
            <div class="flex items-center gap-4 mb-8">
                <i class="pi pi-bell text-3xl text-primary"></i>
                <h2 class="text-3xl font-bold text-surface-900 dark:text-surface-0 m-0">Recordatorios</h2>
            </div>
            
            <div class="notes-grid" *ngIf="reminderNotes.length; else emptyState">
                <app-note-card
                    *ngFor="let note of reminderNotes; trackBy: trackById"
                    [note]="note"
                    view="reminders"
                    (action)="onCardAction($event)"
                ></app-note-card>
            </div>

            <ng-template #emptyState>
                <div class="flex flex-col items-center justify-center mt-32 opacity-40 animate-fadein">
                    <div class="w-32 h-32 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center mb-6">
                        <i class="pi pi-bell text-5xl text-surface-400"></i>
                    </div>
                    <p class="text-2xl font-light">
                        {{ terminoBusqueda ? 'No hay recordatorios que coincidan con tu búsqueda' : 'Los recordatorios aparecerán aquí' }}
                    </p>
                </div>
            </ng-template>
        </div>
    `,
    styles: [`
        .notes-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 1.5rem;
        }
    `]
})
export class Recordatorios implements OnInit {
    private readonly store = inject(NotesStoreService);
    private readonly searchService = inject(SearchService);
    private readonly cdr = inject(ChangeDetectorRef);

    notasOriginales: NoteCardData[] = [];
    reminderNotes: NoteCardData[] = [];
    terminoBusqueda: string = '';

    ngOnInit() {
        this.cargarRecordatorios();
        this.searchService.search$.subscribe(query => {
            this.terminoBusqueda = query;
            this.filtrar();
        });
    }

    cargarRecordatorios() {
        this.notasOriginales = this.store.getReminderNotes();
        this.filtrar();
    }

    filtrar() {
        const q = this.terminoBusqueda.toLowerCase().trim();
        if (!q) {
            this.reminderNotes = [...this.notasOriginales];
        } else {
            this.reminderNotes = this.notasOriginales.filter(n =>
                (n.title || '').toLowerCase().includes(q) ||
                (n.description || '').toLowerCase().includes(q)
            );
        }
        this.cdr.detectChanges();
    }

    onCardAction(event: NoteCardActionEvent): void {
        switch (event.type) {
            case 'archive':
                this.store.setStatus(event.note.id, 'archived');
                this.cargarRecordatorios();
                break;
            case 'delete':
                this.store.setStatus(event.note.id, 'trash');
                this.cargarRecordatorios();
                break;
            case 'togglePin':
                this.store.update(event.note.id, { pinned: !event.note.pinned });
                this.cargarRecordatorios();
                break;
            case 'duplicate':
                this.store.duplicate(event.note.id);
                this.cargarRecordatorios();
                break;
            case 'edit': {
                const title = window.prompt('Editar titulo', event.note.title);
                if (title === null) return;
                const description = window.prompt('Editar contenido', event.note.description);
                if (description === null) return;
                this.store.update(event.note.id, {
                    title: title.trim() || 'Nota sin titulo',
                    description: description.trim()
                });
                this.cargarRecordatorios();
                break;
            }
            case 'reminder': {
                const reminder = window.prompt('Fecha y hora (YYYY-MM-DDTHH:mm)', event.note.reminderAt || '');
                if (reminder === null) return;
                this.store.update(event.note.id, { reminderAt: reminder || undefined });
                this.cargarRecordatorios();
                break;
            }
        }
    }

    trackById(_: number, note: NoteCardData): number {
        return note.id;
    }
}
