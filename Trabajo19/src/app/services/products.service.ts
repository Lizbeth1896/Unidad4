import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiURI: string = "http://damp-spire-59848.herokuapp.com/api/products"
  
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get(this.apiURI);
  }

  getProductById(id: string){
    return this.http.get(`${this.apiURI}/${id}`)
  }

}
