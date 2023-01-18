import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURI: string = "https://jsonplaceholder.typicode.com/users"

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers() {
    // return console.log(this.http.get(this.apiURI)
    return this.http.get(this.apiURI);
  }
}
