import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Address} from "../../models/address";
import {AddressRepository} from "../../../pages/address/state/address.repository";

@Injectable({
    providedIn: 'root'
})
export class AddressService {
    private URL_API: string = environment.api

    constructor(private http: HttpClient, private repo: AddressRepository) {
    }

    getAddresses(): Observable<Address[]> {
        return this.http.get<Address[]>(`${this.URL_API}/addresses`)
            .pipe(
                tap((addresses) => {
                    this.repo.setAddresses(addresses || []);
                })
            );
    }

    getAddress(id: number | null): Observable<Address> {
        return this.http.get<Address>(`${this.URL_API}/addresses/${id}`)
            .pipe(
                tap((address) => {
                    this.repo.setSelectAddress(address || null);
                })
            );

    }

    addAddress(address: Address): Observable<Address> {
        return this.http.post<Address>(`${this.URL_API}/addresses`, address).pipe(
            tap((address: Address) => {
                    this.repo.addNewAddress(address)
                }
            ));
    }

    updateAddress(id: number | null, address: Address): Observable<Address> {
        return this.http.put<Address>(`${this.URL_API}/addresses/${id}`, address).pipe(
            tap((address: Address) => {
                    this.repo.updateAddress(address)
                }
            ));
    }

    deleteAddress(id: number | null) {
        return this.http.delete(`${this.URL_API}/addresses/${id}`).pipe(
            tap(() => {
                    this.repo.removeAddress(id)
                }
            ));
    }
}
