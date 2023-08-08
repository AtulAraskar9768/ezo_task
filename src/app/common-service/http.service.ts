import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EzoHttpService {

  constructor(private http: HttpClient) { }
  baseURL: string = environment.baseURL

  httpRequest(type: string, url: string, data: any): Observable<any> | any {
    if (type === 'get') {
      return this.http.get<any>(this.baseURL + url);
    }

  }

}
