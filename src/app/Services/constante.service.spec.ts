import { TestBed } from '@angular/core/testing';

import { ConstanteService } from './constante.service';

describe('ConstanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstanteService = TestBed.get(ConstanteService);
    expect(service).toBeTruthy();
  });
});
