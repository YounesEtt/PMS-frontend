import { TestBed } from '@angular/core/testing';

import { ScenarioItemConfigurationService } from './scenario-item-configuration.service';

describe('ScenarioItemConfigurationService', () => {
  let service: ScenarioItemConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScenarioItemConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
