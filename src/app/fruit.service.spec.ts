import { TestBed } from '@angular/core/testing';

import { FruitService } from './fruit.service';

describe('FruitserviceService', () => {
  let service: FruitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
