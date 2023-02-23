import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  /**
   * get all categorias
   */
  getCategories(){

    const endpoint = `${base_url}/categories`;
    return this.http.get(endpoint);

  }
}