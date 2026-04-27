import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/v1/notes';

  getNotes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTrash(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/trash`);
  }

  createNote(nota: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, nota);
  }

  updateNote(id: number, nota: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, nota);
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  restoreNote(id: number): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}/restore`, {});
  }

  hardDeleteNote(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}/permanent`);
  }
}