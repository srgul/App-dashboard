import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  url = "http://localhost:3000/login";

  onsubmit(params):Observable<any> {
    return this.http.post<any>( this.url, params)
  } 
}
