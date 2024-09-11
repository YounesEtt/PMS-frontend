import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ship } from '../models/ship.model';
import { Observable } from 'rxjs';
import { Scenario } from '../models/scenario.model';

@Injectable({
  providedIn: 'root'
})
export class ShippointService {

  private baseUrl = 'http://localhost:5103/api/ShipPoint';

  constructor(private http: HttpClient) { }

  getShipPoints(): Observable<Ship[]> {
    return this.http.get<Ship[]>(`${this.baseUrl}`);
  }

  deleteShipPoint(id_ship: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id_ship}`);
  }

  updateShipPoint(id_ship : number,ship: Ship): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id_ship }`,ship);
  }

  CreateShipPoint(ship: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, ship);
  }
}