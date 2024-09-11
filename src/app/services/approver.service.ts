import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { approverScenario } from '../models/approverScenario.model';

@Injectable({
  providedIn: 'root'
})
export class ApproverService {
  private baseUrl = 'http://localhost:5103/api/ApproverScenario';
  
  constructor(private http: HttpClient) { }

  getApprovers(): Observable<approverScenario[]> {
    return this.http.get<approverScenario[]>(`${this.baseUrl}`);
  }

  deleteApprover(id_approver: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id_approver}`);
  }

  updateApprover(id_approver: number, approver: approverScenario): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id_approver}`, approver);
  }

  createApprover(config: { role: string, classe: number ,scenarioId: number}): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/CreateApprover`, config);
  }
}
