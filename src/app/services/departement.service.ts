import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Departement } from '../models/user/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private baseUrl = 'http://localhost:5103/api/Departements';
  constructor(private http: HttpClient) { }
  getDepartements(): Observable<Departement[]> {
    return this.http.get<Departement[]>(`${this.baseUrl}`);
  }

  getDepartementById(id: number): Observable<Departement> {
    return this.http.get<Departement>(`${this.baseUrl}/${id}`);
  }

  createDepartement(departement: Departement): Observable<Departement> {
    return this.http.post<Departement>(`${this.baseUrl}/CreateDepartement`, departement);
  }

  updateDepartement(id: number, departement: Departement): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, departement);
  }

  deleteDepartement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  
 //filter manager
 searchManagers(query: string): Observable<string[]> {
  return this.http.get<string[]>(`${this.baseUrl}/searchManagers`, { params: { query } });
}

}
