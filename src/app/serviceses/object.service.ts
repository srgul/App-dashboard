import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor(
    private http: HttpClient
  ) { }

  url = "http://localhost:3000/object/allObject";

  getModel() {
    return this.http.get(this.url)
  }

}
