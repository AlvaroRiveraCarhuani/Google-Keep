import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `
        <ul class="layout-menu">
            @for (item of model; track item.label) {
                @if (!item.separator) {
                    <li app-menuitem [item]="item" [root]="true"></li>
                } @else {
                    <li class="menu-separator"></li>
                }
            }
        </ul> `
})
export class AppMenu implements OnInit {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Principal',
                items: [
                    { label: 'Notas', icon: 'pi pi-fw pi-lightbulb', routerLink: ['/notas'] },
                    { label: 'Recordatorios', icon: 'pi pi-fw pi-bell', routerLink: ['/recordatorios'] }
                ]
            },
            {
                label: 'Etiquetas',
                items: [
                    { label: 'Editar etiquetas', icon: 'pi pi-fw pi-pencil', routerLink: ['/etiquetas'] }
                ]
            },
            {
                label: 'Archivo',
                items: [
                    { label: 'Archivar', icon: 'pi pi-fw pi-download', routerLink: ['/archivar'] },
                    { label: 'Papelera', icon: 'pi pi-fw pi-trash', routerLink: ['/papelera'] }
                ]
            }
        ];
    }
}