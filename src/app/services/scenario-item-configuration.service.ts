import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SceanrioItemConfiguration } from '../models/sceanrio-item-configuration.model';

@Injectable({
  providedIn: 'root'
})
export class ScenarioItemConfigurationService {
  getScenarioItemsConfiguration(scenarioId: number) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'http://localhost:5103/api/ScenarioItemConfiguration';

  constructor(private http: HttpClient) { }

  CreatescenarioItemsConfiguration(scenarioItemConfiguration: SceanrioItemConfiguration): Observable<any> {
    return this.http.post(`${this.baseUrl}/CreateScenarioItemConfiguration`, scenarioItemConfiguration);
  }
}
