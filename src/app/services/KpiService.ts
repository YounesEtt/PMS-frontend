import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KpiService {
  private baseUrl = 'http://localhost:5103/api/kPIs';

  constructor(private http: HttpClient) { }

  getRequestCountByAllScenarios(): Observable<{ [key: number]: number }> {
    return this.http.get<{ [key: number]: number }>(`${this.baseUrl}/requests-by-all-scenarios`);
  }

  getAllRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all-requests`);
  }

  getRequestCountByCostCenterPerScenario(): Observable<{ [key: string]: { [key: number]: number } }> {
    return this.http.get<{ [key: string]: { [key: number]: number } }>(`${this.baseUrl}/requests-by-costcenter-per-scenario`);
  }
  getRequestCountByCostCenterPerDay(): Observable<{ [key: string]: { [key: string]: number } }> {
    return this.http.get<{ [key: string]: { [key: string]: number } }>(`${this.baseUrl}/requests-by-costcenter-per-day`);
  }
  getAverageFlowTimeForAllRequests(): Observable<{ [key: number]: number }> {
    return this.http.get<{ [key: number]: number }>(`${this.baseUrl}/average-flow-time-all-requests`);
}
}
