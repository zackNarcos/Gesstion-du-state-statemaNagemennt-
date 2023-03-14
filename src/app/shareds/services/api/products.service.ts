import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Product} from "../../models/Product";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private URL_API:string = environment.api

  constructor(
      private http:HttpClient,
  ) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.URL_API}/products`);
  }

  getProduct(id: any | null):Observable<Product>{
    return this.http.get<Product>(`${this.URL_API}/products/${id}`);
  }

  addProduct(product: Product) : Observable<Product>{
    return this.http.post<Product>(`${this.URL_API}/products`,product)
  }
}
