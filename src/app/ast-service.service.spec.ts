import { TestBed, inject } from '@angular/core/testing';

import { AstService } from './ast-service.service';

describe('AstServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AstService]
    });
  });

  it('should be created', inject([AstService], (service: AstService) => {
    expect(service).toBeTruthy();
  }));
});
