import { TestBed, inject } from '@angular/core/testing';

import { HeadersService } from './headers.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('HeadersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeadersService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([HeadersService], (service: HeadersService) => {
    expect(service).toBeTruthy();
  }));
});
