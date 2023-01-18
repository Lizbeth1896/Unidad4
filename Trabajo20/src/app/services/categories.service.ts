import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  apiURI: string = "https://damp-spire-59848.herokuapp.com/api/categories"
  private products: Category[] = []
  constructor(
    private http: HttpClient
  ) { }

  getAllCategories(){
    return this.http.get(this.apiURI)
  }

  getCategoriesById(id: string){
    return this.http.get(`${this.apiURI}/${id}`)
  }

}
