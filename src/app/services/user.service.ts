import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5103/api/User';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(userId: number): Observable<any> { // Modifier le type de retour pour inclure les plantes
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }

  createUser(user: any): Observable<User> { // Modifier le type de paramètre pour inclure les plantes
    return this.http.post<User>(`${this.apiUrl}/CreateUser`, user);
  }

  updateUser(userId: number, user: any): Observable<void> { // Modifier le type de paramètre pour inclure les plantes
    return this.http.put<void>(`${this.apiUrl}/${userId}`, user);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`);
  }

  getDepartments(): Observable<any[]> { // Ajouter cette méthode
    return this.http.get<any[]>('http://localhost:5103/api/Departments');
  }

  getPlants(): Observable<any[]> { // Ajouter cette méthode
    return this.http.get<any[]>('http://localhost:5103/api/Plants');
  }
}