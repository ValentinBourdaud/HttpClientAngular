import { TestBed, inject } from '@angular/core/testing';

import { InterceptorsService } from './interceptors.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpHandler } from '@angular/common/http';

describe('InterceptorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptorsService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([InterceptorsService], (service: InterceptorsService) => {
    expect(service).toBeTruthy();
  }));
});
