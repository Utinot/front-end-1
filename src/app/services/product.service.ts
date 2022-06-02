import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import mockData from './../../data';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }
  getProduct(id: number){
    return mockData.find(item => item.id == id);
  }
  getProductList() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
  removeProduct() {

  }
  addProduct() {

  }
  updateProduct() {

  }
}
