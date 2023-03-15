import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Product} from "../../models/Product";
import {environment} from "../../../../environments/environment";
import {ProductRepository} from "../../../pages/address/state/product.repository";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private URL_API: string = environment.api

    constructor(
        private http: HttpClient,
        private repo: ProductRepository
    ) {
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.URL_API}/products`)
            .pipe(
                tap((products) => {
                    this.repo.setProducts(products || []);
                })
            );
    }

    getProduct(id: string | null): Observable<Product> {
        return this.http.get<Product>(`${this.URL_API}/products/${id}`)
            .pipe(
                tap((product) => {
                    this.repo.setSelectProduct(product || null);
                })
            );
    }

    addProduct(product: Product) {
        return this.http.post(`${this.URL_API}/products`, product)
            .pipe(
                tap((product: Product) => {
                        this.repo.addNewProduct(product)
                    }
                ));
    }
}
