import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { NoteCardComponent } from '../notas/components/note-card.component';
import { NoteCardActionEvent, NoteCardData } from '../notas/models/note.model';
import { NotesStoreService } from '../notas/services/notes-store.service';
import { SearchService } from '../../service/search.service';

@Component({
    selector: 'app-papelera',
    standalone: true,
    imports: [CommonModule, NoteCardComponent],
    template: `
        <div class="p-6 max-w-[1600px] mx-auto">
            <div class="flex items-center gap-4 mb-8">
                <i class="pi pi-trash text-3xl text-red-500"></i>
                <h2 class="text-3xl font-bold text-surface-900 dark:text-surface-0 m-0">Papelera</h2>
            </div>

            <p class="text-color-secondary mb-6" *ngIf="notasBasura.length">
                Las notas en la papelera se eliminan después de 7 días.
            </p>

            <div class="notes-grid" *ngIf="notasBasura.length; else emptyState">
                <app-note-card
                    *ngFor="let note of notasBasura; trackBy: trackById"
                    [note]="note"
                    view="trash"
                    (action)="onCardAction($event)"
                ></app-note-card>
            </div>

            <ng-template #emptyState>
                <div class="flex flex-col items-center justify-center mt-32 opacity-40 animate-fadein">
                    <div class="w-32 h-32 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center mb-6">
                        <i class="pi pi-trash text-5xl text-surface-400"></i>
                    </div>
                    <p class="text-2xl font-light">
                        {{ terminoBusqueda ? 'No hay coincidencias en la papelera' : 'No hay notas en la papelera' }}
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
export class Papelera implements OnInit {
    private readonly store = inject(NotesStoreService);
    private readonly searchService = inject(SearchService);
    private readonly cdr = inject(ChangeDetectorRef);

    notasOriginales: NoteCardData[] = [];
    notasBasura: NoteCardData[] = [];
    terminoBusqueda: string = '';

    ngOnInit() {
        this.cargarBasura();
        this.searchService.search$.subscribe(query => {
            this.terminoBusqueda = query;
            this.filtrar();
        });
    }

    cargarBasura() {
        this.notasOriginales = this.store.getByStatus('trash');
        this.filtrar();
    }

    filtrar() {
        const q = this.terminoBusqueda.toLowerCase().trim();
        if (!q) {
            this.notasBasura = [...this.notasOriginales];
        } else {
            this.notasBasura = this.notasOriginales.filter(n =>
                (n.title || '').toLowerCase().includes(q) ||
                (n.description || '').toLowerCase().includes(q)
            );
        }
        this.cdr.detectChanges();
    }

    onCardAction(event: NoteCardActionEvent): void {
        switch (event.type) {
            case 'restore':
                this.store.setStatus(event.note.id, 'active');
                this.cargarBasura();
                break;
            case 'delete':
                this.store.deletePermanently(event.note.id);
                this.cargarBasura();
                break;
            case 'duplicate':
                this.store.duplicate(event.note.id);
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
                this.cargarBasura();
                break;
            }
        }
    }

    trackById(_: number, note: NoteCardData): number {
        return note.id;
    }
}
