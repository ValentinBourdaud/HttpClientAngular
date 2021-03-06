import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ParamsService {

  constructor(private http: HttpClient) { }

  sampleParams() {
    const params = new HttpParams()
      .set('login', 'nartawak');
    this.http.get(`http://localhost:4200/httpClient`, { params })
      .subscribe(() => { });
  }
}
