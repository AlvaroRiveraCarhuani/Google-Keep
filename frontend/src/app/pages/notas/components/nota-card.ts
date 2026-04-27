import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'app-nota-card',
    standalone: true,
    imports: [CommonModule, ButtonModule, TooltipModule],
    template: `
        <div (click)="onEdit.emit(nota)" 
             [ngClass]="nota.color ? nota.color : 'bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700'"
             class="card h-full flex flex-col justify-between hover:shadow-lg transition-all duration-300 border cursor-pointer relative group p-5 min-h-[180px] rounded-2xl">
            
            <button 
                class="absolute top-3 right-3 z-30 p-2 rounded-full transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5"
                [ngClass]="nota.is_pinned ? 'text-primary opacity-100 scale-110' : 'text-surface-400 opacity-0 group-hover:opacity-100'"
                (click)="fijar($event)"
                [pTooltip]="nota.is_pinned ? 'Desfijar' : 'Fijar nota'"
                tooltipPosition="bottom">
                <i [class]="nota.is_pinned ? 'pi pi-thumbtack' : 'pi pi-thumbtack rotate-45'" class="text-lg"></i>
            </button>

            <div class="flex-grow">
                <h3 class="font-bold text-lg mb-2 break-words pr-8 text-surface-900 dark:text-surface-0">{{ nota.title }}</h3>
                <p class="whitespace-pre-wrap text-surface-600 dark:text-surface-400 leading-relaxed text-sm line-clamp-6">{{ nota.content }}</p>
            </div>

            <div class="flex justify-end items-center gap-1 z-20 h-9 mt-4 border-t border-surface-100 dark:border-surface-800 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p-button icon="pi pi-palette" [text]="true" severity="secondary" 
                    [pTooltip]="'Cambiar color'" tooltipPosition="bottom" class="p-button-rounded"></p-button>
                <p-button icon="pi pi-pencil" [text]="true" severity="secondary" 
                    (click)="editar($event)" [pTooltip]="'Editar'" tooltipPosition="bottom" class="p-button-rounded"></p-button>
                <p-button icon="pi pi-trash" [text]="true" severity="secondary" 
                    (click)="eliminar($event)" [pTooltip]="'Borrar'" tooltipPosition="bottom" class="p-button-rounded"></p-button>
            </div>
        </div>
    `
})
export class NotaCard {
    @Input() nota: any;
    @Output() onDelete = new EventEmitter<number>();
    @Output() onEdit = new EventEmitter<any>();
    @Output() onPin = new EventEmitter<any>();

    fijar(event: Event) {
        event.stopPropagation();
        this.onPin.emit(this.nota);
    }

    editar(event: Event) {
        event.stopPropagation();
        this.onEdit.emit(this.nota);
    }

    eliminar(event: Event) {
        event.stopPropagation();
        this.onDelete.emit(this.nota.id);
    }
}