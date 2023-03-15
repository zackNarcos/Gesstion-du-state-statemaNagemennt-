import {Injectable} from '@angular/core';
import {select} from '@ngneat/elf';
import {addEntities, deleteEntities, selectAllEntities, setEntities, updateEntities,} from '@ngneat/elf-entities';
import {Product} from "../../../shareds/models/Product";
import {productStore} from "../../store/app.store";


@Injectable({providedIn: 'root'})
export class ProductRepository {

    store = productStore;

    products$ = this.store.pipe(selectAllEntities());
    selectedProducts$ = this.store.pipe(select((state) => state.product));


    setProducts(products: Product[]) {
        this.store.update(setEntities(products));
    }

    updateProduct(product: Product) {
        this.store.update(
            updateEntities(product.id,
                product
            )
        );
    }

    addNewProduct(product: Product) {
        this.store.update(
            addEntities(product)
        )
    }

    removeProduct(id: number) {
        this.store.update(
            deleteEntities([id])
        )
    }

    setSelectProduct(user: Product) {
        this.store.update((state) => ({
            ...state,
            user,
        }));
    }

}
