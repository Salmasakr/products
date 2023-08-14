import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'https://dummyjson.com';

  constructor(private http:HttpClient ) {  }

  getAllProducts():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.baseUrl}/products`)
  }
   getSingleProduct(productId: number):Observable<IProduct> {
  return this.http.get<IProduct>(`${this.baseUrl}/products/${productId}`)
}
 
}

