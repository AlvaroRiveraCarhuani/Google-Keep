import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { UsuarioListComponent } from './app/usuario/usuario-list/usuario-list.component';
import { Notas } from './app/pages/notas/notas';
import { Recordatorios } from './app/pages/recordatorios/recordatorios';
import { Etiquetas } from './app/pages/etiquetas/etiquetas';
import { Archivar } from './app/pages/archivar/archivar';
import { Papelera } from './app/pages/papelera/papelera';
import { authGuard } from './app/guard/auth.guard';

export const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth/login' 
    },
    {
        path: '',
        component: AppLayout,
        canActivate: [authGuard],
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'notas', component: Notas },
            { path: 'recordatorios', component: Recordatorios },
            { path: 'archivar', component: Archivar },
            { path: 'papelera', component: Papelera },
            { path: 'etiquetas', component: Etiquetas },
            { path: 'usuario', component: UsuarioListComponent}
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { 
        path: 'auth', 
        loadChildren: () => import('./app/pages/auth/auth.routes').then(m => m.AUTH_ROUTES) 
    },
    { path: '**', redirectTo: '/notfound' }
];