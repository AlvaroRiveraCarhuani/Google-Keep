import { Component } from '@angular/core';

@Component({
    selector: 'app-recordatorios',
    standalone: true,
    template: `
        <div class="p-6 max-w-[1600px] mx-auto">
            <div class="flex items-center gap-4 mb-8">
                <i class="pi pi-bell text-3xl text-primary"></i>
                <h2 class="text-3xl font-bold text-surface-900 dark:text-surface-0 m-0">Recordatorios</h2>
            </div>
            
            <div class="flex flex-col items-center justify-center mt-32 opacity-40 animate-fadein">
                <div class="w-32 h-32 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center mb-6">
                    <i class="pi pi-bell text-5xl text-surface-400"></i>
                </div>
                <p class="text-2xl font-light">Los recordatorios aparecerán aquí</p>
            </div>
        </div>
    `
})
export class Recordatorios { }
