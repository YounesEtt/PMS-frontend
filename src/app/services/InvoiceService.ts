// invoice.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private baseUrl = 'http://localhost:5103/api/invoice'; // Changez l'URL en fonction de votre configuration

  constructor(private http: HttpClient) { }

  generateInvoice(requestId: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/generate/${requestId}`, { responseType: 'blob' });
  }
}
