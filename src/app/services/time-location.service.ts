import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeLocationService {
  apiUrlLocation = "https://freegeoip.app/json/";
  apiUrlTime = "https://worldtimeapi.org/api/ip";
 
  constructor(private httpClient:HttpClient) { }

  get time() {
    return this.httpClient.get(this.apiUrlTime);
  }

  get location() {
    return this.httpClient.get(this.apiUrlLocation);
  }

}
