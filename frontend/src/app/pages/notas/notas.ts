import { Component } from '@angular/core';

@Component({
    selector: 'app-notas',
    standalone: true,
    template: `
        <div class="min-h-screen p-6">
            <h1 class="text-2xl font-bold mb-4">Notas</h1>
            <div class="bg-surface-0 dark:bg-surface-900 border rounded p-6">Contenedor vacío para notas.</div>
        </div>
    `
})
export class Notas {}
