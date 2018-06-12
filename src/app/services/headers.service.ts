import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeadersService {

  constructor(private http: HttpClient) { }

  sampleHeader() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    this.http.get(`http://localhost:4200/httpClient`, { headers })
      .subscribe(() => { });
  }

}
