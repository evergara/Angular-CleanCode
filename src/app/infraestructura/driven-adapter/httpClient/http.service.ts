import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {}

  get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  post(url: string, data: any){
    return this.httpClient.post(url, JSON.stringify(data));
  }

  put(url: string, data: any) {
    return this.httpClient.put(url, JSON.stringify(data));
  }

  delete(url: string) {
    return this.httpClient.delete(url);
  }
}
