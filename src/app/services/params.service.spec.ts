import { TestBed, inject } from '@angular/core/testing';

import { ParamsService } from './params.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ParamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParamsService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([ParamsService], (service: ParamsService) => {
    expect(service).toBeTruthy();
  }));
});
