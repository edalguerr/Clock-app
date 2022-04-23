import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  urlApi = "https://api.quotable.io/";

  constructor(private httpClient:HttpClient) { }

  get quote():Observable<Object> {
    return this.httpClient.get(`${this.urlApi}random`);
  }
}
