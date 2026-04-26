import { Routes } from '@angular/router';
import { Login } from './login';
import { Register } from './register'; 
import { Error } from './error';
import { Access } from './access';

export const AUTH_ROUTES: Routes = [
    { path: 'login', component: Login },
    { path: 'register', component: Register }, 
    { path: 'error', component: Error },
    { path: 'access', component: Access },
    { path: '**', redirectTo: '/notfound' }
];