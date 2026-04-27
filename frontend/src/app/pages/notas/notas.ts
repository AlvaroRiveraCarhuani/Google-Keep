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

@Component({
    standalone: true,
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