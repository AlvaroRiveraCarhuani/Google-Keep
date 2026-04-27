import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '@/app/layout/service/layout.service';
import { AuthService } from '@/app/service/auth/auth.service';
import { SearchService } from '@/app/service/search.service';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, InputTextModule, AppConfigurator, TooltipModule],
    template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo flex items-center gap-2" routerLink="/">
                <div class="bg-yellow-400 p-2 rounded-lg flex items-center justify-center">
                    <i class="pi pi-lightbulb text-white text-xl"></i>
                </div>
                <span class="text-surface-700 dark:text-surface-100 font-medium text-xl tracking-tight">Keep</span>
            </a>
        </div>

        <div class="layout-topbar-search flex items-center flex-1 max-w-2xl px-4">
            <div class="relative w-full group">
                <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary transition-colors"></i>
                <input 
                    pInputText 
                    type="text" 
                    placeholder="Buscar en tus notas..." 
                    (input)="onSearch($event)" 
                    class="w-full pl-12 pr-4 py-3 bg-surface-100 dark:bg-surface-800 border-none rounded-xl focus:bg-white dark:focus:bg-surface-700 focus:shadow-md transition-all outline-none" 
                />
            </div>
        </div>

        <div class="layout-topbar-actions ml-auto">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()" pTooltip="Cambiar tema">
                    <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                </button>
                
                <div class="relative">
                    <button
                        class="layout-topbar-action"
                        pStyleClass="@next"
                        enterFromClass="hidden"
                        enterActiveClass="animate-scalein"
                        leaveToClass="hidden"
                        leaveActiveClass="animate-fadeout"
                        [hideOnOutsideClick]="true"
                        pTooltip="Configuración de vista"
                    >
                        <i class="pi pi-cog"></i>
                    </button>
                    <app-configurator />
                </div>
            </div>

            <div class="layout-topbar-menu">
                <div class="layout-topbar-menu-content flex items-center gap-2">
                    <button type="button" class="layout-topbar-action" pTooltip="Actualizar">
                        <i class="pi pi-refresh"></i>
                    </button>
                    
                    <button type="button" class="layout-topbar-action" (click)="onLogout()" pTooltip="Cerrar Sesión">
                        <i class="pi pi-sign-out"></i>
                    </button>
                    
                    <div class="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold ml-2 cursor-pointer shadow-sm">
                        {{ userInitials }}
                    </div>
                </div>
            </div>
        </div>
    </div>`
})
export class AppTopbar {
    items!: MenuItem[];

    layoutService = inject(LayoutService);
    private authService = inject(AuthService);
    private searchService = inject(SearchService);
    private router = inject(Router);

    get userInitials(): string {
        const user = this.authService.getUsuario();
        if (!user) return 'U';
        const name = user.name || (user.first_name ? `${user.first_name} ${user.last_name || ''}` : '') || user.email || 'U';
        return name.trim().split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase();
    }

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({
            ...state,
            darkTheme: !state.darkTheme
        }));
    }

    onSearch(event: Event) {
        const value = (event.target as HTMLInputElement).value;
        this.searchService.updateSearch(value);
    }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
}