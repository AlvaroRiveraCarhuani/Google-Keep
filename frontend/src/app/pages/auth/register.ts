import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import { AuthService } from '../../service/auth/auth.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [ButtonModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, AppFloatingConfigurator],
    template: `
        <app-floating-configurator />
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-screen overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                        <div class="text-center mb-8">
                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Crea tu cuenta</div>
                            <span class="text-muted-color font-medium">Únete para organizar tus ideas</span>
                        </div>

                        <div>
                            <label class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Nombre Completo</label>
                            <input pInputText type="text" [(ngModel)]="name" placeholder="Tu nombre" class="w-full md:w-120 mb-5" (keyup.enter)="onRegister()" />

                            <label class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
                            <input pInputText type="email" [(ngModel)]="email" placeholder="Correo electrónico" class="w-full md:w-120 mb-5" (keyup.enter)="onRegister()" />

                            <label class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Password</label>
                            <p-password 
                                [(ngModel)]="password" 
                                placeholder="Contraseña" 
                                [toggleMask]="true" 
                                styleClass="mb-8" 
                                [fluid]="true"
                                [feedback]="true"
                                promptLabel="Elige una clave"
                                weakLabel="Débil"
                                mediumLabel="Media"
                                strongLabel="Fuerte"
                                (keyup.enter)="onRegister()">
                            </p-password>

                            <p-button label="Registrarme" styleClass="w-full" (click)="onRegister()" [loading]="loading"></p-button>
                            
                            <div class="mt-4 text-center">
                                <span class="text-muted-color">¿Ya tienes cuenta? </span>
                                <a routerLink="/auth/login" class="text-primary font-bold no-underline cursor-pointer">Inicia sesión</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class Register {
    name = '';
    email = '';
    password = '';
    loading = false;

    private authService = inject(AuthService);
    private messageService = inject(MessageService);
    private router = inject(Router);

    onRegister() {
        if (!this.name || !this.email || !this.password) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Todos los campos son obligatorios' });
            return;
        }

        this.loading = true;
        this.authService.register(this.name, this.email, this.password).subscribe({
            next: () => {
                this.loading = false;
                this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Cuenta creada correctamente' });
                this.router.navigate(['/auth/login']);
            },
            error: () => {
                this.loading = false;
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo completar el registro' });
            }
        });
    }
}