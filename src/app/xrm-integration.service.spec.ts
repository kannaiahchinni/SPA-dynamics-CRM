import { TestBed, inject } from '@angular/core/testing';

import { XrmIntegrationService } from './xrm-integration.service';

describe('XrmIntegrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XrmIntegrationService]
    });
  });

  it('should be created', inject([XrmIntegrationService], (service: XrmIntegrationService) => {
    expect(service).toBeTruthy();
  }));
});
