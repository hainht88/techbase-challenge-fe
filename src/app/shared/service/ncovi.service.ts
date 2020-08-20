import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NcoviService {

  constructor(private httpClient: HttpClient) { 
  }

  getSummary() {
    return this.httpClient.get('https://api.covid19api.com/summary');
  }
}
