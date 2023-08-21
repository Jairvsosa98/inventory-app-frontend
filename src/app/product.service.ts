import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlBase = environment.baseUrl;

  constructor(private clientHttp: HttpClient) {

  }

  getListProducts(): Observable<Product[]> {
    return this.clientHttp.get<Product[]>(this.urlBase);
  }
  addProduct(product: Product): Observable<Object> {
    return this.clientHttp.post(this.urlBase, product);
  }

  getProductById(id: Number) {
    return this.clientHttp.get<Product>(`${this.urlBase}/${id}`);
  }

  updateProduct(id: Number, product: Product): Observable<Object> {
    return this.clientHttp.put(`${this.urlBase}/${id}`, product);
  }

  deleteProduct(id: Number): Observable<Object> {
    return this.clientHttp.delete(`${this.urlBase}/${id}`);
  }


}
