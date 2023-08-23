import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { environment } from './environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlBase: string;
  

  constructor(private clientHttp: HttpClient) {
    this.urlBase = environment.apiUrl;
  }

  getListProducts(): Observable<Product[]> {
    return this.clientHttp.get<Product[]>(`${this.urlBase}/products`);
  }
  addProduct(product: Product): Observable<Object> {
    return this.clientHttp.post(`${this.urlBase}/products`, product);
  }

  getProductById(id: Number) {
    return this.clientHttp.get<Product>(`${this.urlBase}/products/${id}`);
  }

  updateProduct(id: Number, product: Product): Observable<Object> {
    return this.clientHttp.put(`${this.urlBase}/products/${id}`, product);
  }

  deleteProduct(id: Number): Observable<Object> {
    return this.clientHttp.delete(`${this.urlBase}/products/${id}`);
  }


}
