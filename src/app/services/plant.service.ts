import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/user/plant.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private baseUrl = 'http://localhost:5103/api/plants';
  constructor(private http: HttpClient) { }
  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(`${this.baseUrl}`);
  }

  deletePlant(id_plnat: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id_plnat}`);
   /* const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<void>(url);*/
  }
  updatePlant(id_plnat : number,plant: Plant): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id_plnat }`, plant);
  }
  savePlant(plant: Plant): Observable<any> {
    return this.http.post(`${this.baseUrl}/CreatePlant`, plant);
  }
  //filter managerPlant
 searchManagerPlants(query: string): Observable<string[]> {
  return this.http.get<string[]>(`${this.baseUrl}/searchManagerPlants`, { params: { query } });
}
}
