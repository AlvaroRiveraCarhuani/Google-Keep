import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import { AuthService } from '../../service/auth/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, AppFloatingConfigurator],
    template: `
        <app-floating-configurator />
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-screen overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                        <div class="text-center mb-8">
                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Bienvenido Usuario</div>
                            <span class="text-muted-color font-medium">Inicia sesión para ver tus notas</span>
                        </div>

                        <div>
                            <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
                            <input pInputText id="email1" type="text" placeholder="Correo electrónico" class="w-full md:w-120 mb-8" [(ngModel)]="email" (keyup.enter)="onLogin()" />

                            <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Password</label>
                            <p-password id="password1" [(ngModel)]="password" placeholder="Contraseña" [toggleMask]="true" styleClass="mb-4" [fluid]="true" [feedback]="false" (keyup.enter)="onLogin()"></p-password>

                            <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                                <div class="flex items-center">
                                    <p-checkbox [(ngModel)]="checked" id="rememberme1" binary class="mr-2"></p-checkbox>
                                    <label for="rememberme1">Recordarme</label>
                                </div>
                            </div>
                            
                            <p-button label="Ingresar" styleClass="w-full" (click)="onLogin()" [loading]="loading"></p-button>
                            
                            <div class="mt-6 text-center">
                                <span class="text-muted-color">¿No tienes cuenta? </span>
                                <a routerLink="/auth/register" class="text-primary font-bold no-underline cursor-pointer hover:underline">Regístrate aquí</a>
                            </div>
                            
                            @if (errorMessage) {
                                <div class="text-red-500 mt-4 text-center font-bold">{{ errorMessage }}</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class Login {
    email = '';
    password = '';
    checked = false;
    loading = false;
    errorMessage = '';

    private authService = inject(AuthService);
    private router = inject(Router);

    onLogin() {
        if (!this.email || !this.password) {
            this.errorMessage = 'Llena todos los campos';
            return;
        }

        this.loading = true;
        this.errorMessage = '';

        this.authService.login(this.email, this.password).subscribe({
            next: () => {
                this.loading = false;
                this.router.navigate(['/notas']);
            },
            error: (err) => {
                this.loading = false;
                this.errorMessage = 'Credenciales incorrectas. Intenta de nuevo.';
                console.error(err);
            }
        });
    }
}