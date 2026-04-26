import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, ToastModule, ConfirmDialogModule],
    template: `
        <router-outlet></router-outlet>
        
        <p-toast position="bottom-right"></p-toast>
        
        <p-confirmDialog 
            [style]="{width: '450px'}" 
            rejectButtonStyleClass="p-button-text p-button-secondary"
            acceptButtonStyleClass="p-button-danger">
        </p-confirmDialog>
    `
})
export class AppComponent {}