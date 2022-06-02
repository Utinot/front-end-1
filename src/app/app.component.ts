import { Component } from '@angular/core';
import { IProduct } from './models/Product';
import  mockData   from './../data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList: IProduct[] = mockData ;
  onHandleAdd(product: any) {
    console.log('prduct', product);
    this.productList.push(product);
  }
}
