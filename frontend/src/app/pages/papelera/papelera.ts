<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NoteCardComponent } from '../notas/components/note-card.component';
import { NoteCardActionEvent, NoteCardData } from '../notas/models/note.model';
import { NotesStoreService } from '../notas/services/notes-store.service';
=======
import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../service/note/note.service';
import { SearchService } from '../../service/search.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
>>>>>>> 889a5789d2d7727f44b3c0487d9389200eafbe9d

@Component({
    selector: 'app-papelera',
    standalone: true,
<<<<<<< HEAD
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
=======
    imports: [CommonModule, ButtonModule, TooltipModule],
    template: `
        <div class="p-6 max-w-[1600px] mx-auto">
            <div class="flex items-center gap-4 mb-8">
                <i class="pi pi-trash text-3xl text-red-500"></i>
                <h2 class="text-3xl font-bold text-surface-900 dark:text-surface-0 m-0">Papelera</h2>
            </div>
            
            @if (notasBasura.length === 0 && notasOriginales.length === 0) {
                <div class="flex flex-col items-center justify-center mt-32 opacity-40 animate-fadein">
                    <div class="w-32 h-32 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center mb-6">
                        <i class="pi pi-trash text-5xl text-surface-400"></i>
                    </div>
                    <p class="text-2xl font-light">No hay notas en la papelera</p>
                </div>
            } @else if (notasBasura.length === 0 && notasOriginales.length > 0) {
                <div class="flex flex-col items-center justify-center mt-32 animate-fadein">
                    <div class="w-32 h-32 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center mb-6">
                        <i class="pi pi-search text-5xl text-surface-400"></i>
                    </div>
                    <p class="text-xl text-surface-500 font-medium">No hay coincidencias en la papelera</p>
                </div>
            }

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                @for (nota of notasBasura; track nota.id) {
                    <div [ngClass]="nota.color ? nota.color : 'bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700'" 
                         class="card h-full flex flex-col justify-between border shadow-sm hover:shadow-md transition-all duration-300 opacity-80 group p-5 min-h-[180px] rounded-2xl">
                        <div class="flex-grow">
                            <h3 class="font-bold text-lg mb-2 break-words text-surface-900 dark:text-surface-0">{{ nota.title }}</h3>
                            <p class="whitespace-pre-wrap text-surface-600 dark:text-surface-400 text-sm line-clamp-6">{{ nota.content }}</p>
                        </div>
                        <div class="flex justify-end items-center gap-1 z-20 h-9 mt-4 border-t border-surface-100 dark:border-surface-800 pt-3">
                            <p-button 
                                icon="pi pi-refresh" 
                                [text]="true" 
                                severity="secondary" 
                                (click)="restaurar(nota.id)" 
                                pTooltip="Restaurar"
                                tooltipPosition="bottom"
                                class="p-button-rounded">
                            </p-button>
                            <p-button 
                                icon="pi pi-trash" 
                                [text]="true" 
                                severity="danger" 
                                (click)="eliminarDefinitivo(nota.id)" 
                                pTooltip="Eliminar permanentemente"
                                tooltipPosition="bottom"
                                class="p-button-rounded">
                            </p-button>
                        </div>
                    </div>
                }
            </div>
        </div>
    `
})
export class Papelera implements OnInit {
    private noteService = inject(NoteService);
    private searchService = inject(SearchService);
    private cdr = inject(ChangeDetectorRef);
    private confirmationService = inject(ConfirmationService);
    private messageService = inject(MessageService);

    notasOriginales: any[] = [];
    notasBasura: any[] = [];
    terminoBusqueda: string = '';

    ngOnInit() {
        this.cargarBasura();
        this.searchService.search$.subscribe(query => {
            this.terminoBusqueda = query;
            this.filtrar();
        });
    }

    cargarBasura() {
        this.noteService.getTrash().subscribe((res: any) => {
            this.notasOriginales = res;
            this.filtrar();
        });
    }

    filtrar() {
        const q = this.terminoBusqueda.toLowerCase().trim();
        if (!q) {
            this.notasBasura = [...this.notasOriginales];
        } else {
            this.notasBasura = this.notasOriginales.filter(n =>
                (n.title || '').toLowerCase().includes(q) ||
                (n.content || '').toLowerCase().includes(q)
            );
        }
        this.cdr.detectChanges();
    }

    restaurar(id: number) {
        this.noteService.restoreNote(id).subscribe(() => {
            this.cargarBasura();
            this.messageService.add({ severity: 'success', summary: 'Restaurada', detail: 'La nota volvió a Mis Notas' });
        });
    }

    eliminarDefinitivo(id: number) {
        this.confirmationService.confirm({
            message: '¿Estás seguro de que quieres eliminar esta nota permanentemente? Esta acción no se puede deshacer.',
            header: 'Confirmar Eliminación',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sí, eliminar',
            rejectLabel: 'Cancelar',
            accept: () => {
                this.noteService.hardDeleteNote(id).subscribe(() => {
                    this.cargarBasura();
                    this.messageService.add({ severity: 'success', summary: 'Eliminada', detail: 'Nota eliminada de forma permanente' });
                });
            }
        });
    }
}
>>>>>>> 889a5789d2d7727f44b3c0487d9389200eafbe9d
