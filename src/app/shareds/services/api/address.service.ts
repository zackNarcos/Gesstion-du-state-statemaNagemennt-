import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../models/Product";
import {Address} from "../../models/address";

@Injectable({
    providedIn: 'root'
})
export class AddressService {
    private URL_API: string = environment.api

    constructor(private http: HttpClient) {
    }

    getAddresses(): Observable<Address[]> {
        return this.http.get<Address[]>(`${this.URL_API}/addresses`);
    }

    getAddress(id: string | null): Observable<Address> {
        return this.http.get<Address>(`${this.URL_API}/addresses/${id}`);
    }

    addAddress(product: Product) {
        return this.http.post(`${this.URL_API}/addresses`, product)
    }

    updateAddress(id: string | null, product: Product) {
        return this.http.put(`${this.URL_API}/addresses/${id}`, product)
    }

    deleteAddress(id: string | null) {
        return this.http.delete(`${this.URL_API}/addresses/${id}`)
    }
}
