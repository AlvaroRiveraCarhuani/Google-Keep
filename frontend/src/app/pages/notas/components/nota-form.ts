import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
    selector: 'app-nota-form',
    standalone: true,
    imports: [CommonModule, FormsModule, InputTextModule, TextareaModule, ButtonModule, DialogModule],
    template: `
        <div class="flex justify-center mb-8">
            <p-button 
                label="Crear nueva nota" 
                icon="pi pi-plus" 
                [rounded]="true" 
                severity="primary" 
                (click)="showDialog = true">
            </p-button>
        </div>

        <p-dialog 
            [(visible)]="showDialog" 
            [modal]="true" 
            [style]="{ width: '35rem' }" 
            [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }" 
            [dismissableMask]="true" 
            [showHeader]="false">
            
            <div [ngClass]="nuevaNota.color ? nuevaNota.color : 'bg-surface-0 dark:bg-surface-900'" class="flex flex-col gap-4 p-4 mt-2 rounded-t-xl transition-colors duration-200">
                <input pInputText placeholder="Título" [(ngModel)]="nuevaNota.title" 
                       class="w-full border-none font-bold text-xl p-0 focus:ring-0 bg-transparent text-surface-900 dark:text-surface-0" autofocus />
                
                <textarea pInputTextarea placeholder="Añadir una nota..." [(ngModel)]="nuevaNota.content" 
                          rows="5" class="w-full border-none resize-none p-0 focus:ring-0 bg-transparent text-surface-700 dark:text-surface-300" [autoResize]="true"></textarea>
            </div>

            <div [ngClass]="nuevaNota.color ? nuevaNota.color : 'bg-surface-0 dark:bg-surface-900'" class="flex justify-between items-center px-4 pb-4 rounded-b-xl transition-colors duration-200">
                <div class="flex gap-2">
                    @for (color of paleta; track color) {
                        <div 
                            class="w-6 h-6 rounded-full cursor-pointer border-2 transition-transform hover:scale-110"
                            [ngClass]="color ? color : 'bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700'"
                            [class.border-primary]="nuevaNota.color === color"
                            (click)="nuevaNota.color = color">
                        </div>
                    }
                </div>
                <div class="flex gap-2">
                    <p-button label="Cancelar" [text]="true" severity="secondary" (click)="cerrar()"></p-button>
                    <p-button label="Guardar" [text]="true" (click)="guardar()"></p-button>
                </div>
            </div>
        </p-dialog>
    `
})
export class NotaForm {
    paleta = [
        '',
        'bg-red-100 dark:bg-red-900/40',
        'bg-orange-100 dark:bg-orange-900/40',
        'bg-yellow-100 dark:bg-yellow-900/40',
        'bg-green-100 dark:bg-green-900/40',
        'bg-blue-100 dark:bg-blue-900/40',
        'bg-purple-100 dark:bg-purple-900/40'
    ];
    nuevaNota = { title: '', content: '', color: '' };
    showDialog = false;
    @Output() onSave = new EventEmitter<any>();

    cerrar() {
        this.showDialog = false;
        this.nuevaNota = { title: '', content: '', color: '' };
    }

    guardar() {
        if (this.nuevaNota.title || this.nuevaNota.content) {
            this.onSave.emit({ ...this.nuevaNota });
        }
        this.cerrar();
    }
}