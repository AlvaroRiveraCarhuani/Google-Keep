import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private authUrl = 'http://localhost:3000/api/v1/auth';
  private usuarioUrl = 'http://localhost:3000/api/v1/usuarios';

  login(email: string, password: string) {
    return this.http.post<any>(`${this.authUrl}/login`, { email, password }).pipe(
      tap(res => {
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('usuario', JSON.stringify(res.usuario));
      })
    );
  }

  register(name: string, email: string, password: string) {
    return this.http.post<any>(`${this.usuarioUrl}/register`, { name, email, password });
  }

  logout() {
    localStorage.clear(); // Borra todo: token, usuario, preferencias
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('access_token');
  }
}