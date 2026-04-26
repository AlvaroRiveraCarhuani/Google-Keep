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
             [ngClass]="nota.color ? nota.color : 'bg-surface-0 dark:bg-surface-900'"
             class="card h-full flex flex-col justify-between hover:shadow-md transition-all duration-200 border border-surface-200 dark:border-surface-700 cursor-pointer relative group p-4 min-h-[160px] rounded-xl">
            
            <button 
                class="absolute top-2 right-2 z-30 p-1 rounded-full transition-all duration-200"
                [ngClass]="nota.is_pinned ? 'text-primary opacity-100' : 'text-surface-400 opacity-0 group-hover:opacity-100'"
                (click)="fijar($event)"
                [pTooltip]="nota.is_pinned ? 'Desfijar' : 'Fijar nota'">
                <i [class]="nota.is_pinned ? 'pi pi-thumbtack' : 'pi pi-thumbtack rotate-45'"></i>
            </button>

            <div class="flex-grow">
                <h3 class="font-bold text-xl mb-3 break-words pr-6">{{ nota.title }}</h3>
                <p class="whitespace-pre-wrap text-surface-600 dark:text-surface-400 leading-relaxed">{{ nota.content }}</p>
            </div>

            <div class="flex justify-end gap-1 z-20 h-9 mt-4">
                <p-button icon="pi pi-pencil" [text]="true" severity="secondary" 
                    class="opacity-0 group-hover:opacity-100" (click)="editar($event)"></p-button>
                <p-button icon="pi pi-trash" [text]="true" severity="danger" 
                    class="opacity-0 group-hover:opacity-100" (click)="eliminar($event)"></p-button>
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