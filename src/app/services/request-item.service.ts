import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestItem } from '../models/request-item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestItemService {

  private baseUrl = 'http://localhost:5103/api/RequestItem';

  constructor(private http: HttpClient) { }

  // Get all request items
  getRequestItems(): Observable<RequestItem[]> {
    return this.http.get<RequestItem[]>(`${this.baseUrl}`);
  }

  // Delete a specific request item by ID
  deleteRequestItem(id_request_item: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id_request_item}`);
  }

  // Update a request item
  updateRequestItem(id_request_item: number, requestItem: RequestItem): Observable<RequestItem> {
    return this.http.put<RequestItem>(`${this.baseUrl}/${id_request_item}`, requestItem);
  }

  // Create a new request item
  saveRequestItem(requestItem: { nameItem: string }): Observable<RequestItem> {
    return this.http.post<RequestItem>(`${this.baseUrl}/CreateRequestItem`, requestItem);
  }
}
