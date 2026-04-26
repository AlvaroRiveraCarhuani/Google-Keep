import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../service/note/note.service';
import { SearchService } from '../../service/search.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'app-papelera',
    standalone: true,
    imports: [CommonModule, ButtonModule, TooltipModule],
    template: `
        <div class="p-4">
            <h2 class="text-3xl font-bold mb-6 text-red-500">
                <i class="pi pi-trash text-3xl mr-2"></i>Papelera
            </h2>
            
            @if (notasBasura.length === 0 && notasOriginales.length === 0) {
                <div class="flex flex-col items-center justify-center mt-20 text-surface-500">
                    <i class="pi pi-inbox text-6xl mb-4 opacity-50"></i>
                    <p class="text-xl">La papelera está vacía</p>
                </div>
            } @else if (notasBasura.length === 0 && notasOriginales.length > 0) {
                <div class="flex flex-col items-center justify-center mt-20 opacity-20">
                    <i class="pi pi-search text-8xl mb-4"></i>
                    <p class="text-2xl">No hay coincidencias en la papelera</p>
                </div>
            }

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                @for (nota of notasBasura; track nota.id) {
                    <div [ngClass]="nota.color ? nota.color : 'bg-surface-50 dark:bg-surface-900'" 
                         class="card h-full flex flex-col justify-between border border-surface-200 dark:border-surface-700 opacity-80 p-4 rounded-xl">
                        <div>
                            <h3 class="font-bold text-xl mb-3 break-words">{{ nota.title }}</h3>
                            <p class="whitespace-pre-wrap text-surface-600 dark:text-surface-400">{{ nota.content }}</p>
                        </div>
                        <div class="flex justify-end gap-2 mt-4">
                            <p-button 
                                icon="pi pi-refresh" 
                                [text]="true" 
                                severity="success" 
                                (click)="restaurar(nota.id)" 
                                pTooltip="Restaurar"
                                tooltipPosition="bottom">
                            </p-button>
                            <p-button 
                                icon="pi pi-times" 
                                [text]="true" 
                                severity="danger" 
                                (click)="eliminarDefinitivo(nota.id)" 
                                pTooltip="Eliminar permanentemente"
                                tooltipPosition="bottom">
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