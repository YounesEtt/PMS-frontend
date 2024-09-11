import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CreateRequest, UpdateFinanceRequestDTO} from '../models/request.model';
import { saveAs } from 'file-saver';



@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseUrl = 'http://localhost:5103/api/Request';

  constructor(private http: HttpClient) { }

  getRequests(): Observable<CreateRequest[]> {
    return this.http.get<CreateRequest[]>(`${this.baseUrl}`);
  }

  deleteRequest(requestNumber: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${requestNumber}`);
  }

  updateRequestByFinance(requestNumber: number, updateData: UpdateFinanceRequestDTO): Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdateRequestByFinance/${requestNumber}`, updateData);
  }

  updateRequestByTradCompliance(requestNumber: number, updateData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdateRequestByTradCompliance/${requestNumber}`, updateData);
  }
  updateRequestByWarehouse(requestNumber: number, updateData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdateRequestByWarehouse/${requestNumber}`, updateData);
  }
  getRequestById(id: number): Observable<CreateRequest> {
    return this.http.get<CreateRequest>(`${this.baseUrl}/${id}`);
  }

  createRequest(requestData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/CreateRequest`, requestData);
  }

  /*createApproverRequest(approverRequestData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/CreateApproverRequest`, approverRequestData);
  }*/
  rejectRequest(requestNumber: number, rejectData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/RejectRequest/${requestNumber}`, rejectData);
  }
  downloadInvoice(requestNumber: number): void {
    this.http.get(`${this.baseUrl}/${requestNumber}/invoice`, { responseType: 'blob' }).pipe(
      map((response: Blob) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        saveAs(blob, `Invoice_${requestNumber}.pdf`);
      })
    ).subscribe();
  }
  exportRequestsExcel(): void {
    this.http.get(`${this.baseUrl}/ExportRequestsExcel`, { responseType: 'blob' }).subscribe((response: Blob) => {
      const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      saveAs(blob, `Requests.xlsx`);
    });
  }
}

