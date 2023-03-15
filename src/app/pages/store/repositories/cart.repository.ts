import {Injectable} from '@angular/core';
import {createStore, select, withProps} from '@ngneat/elf';
import {addEntities, getEntity, selectAllEntities, updateEntities, withEntities,} from '@ngneat/elf-entities';
import {Address} from "../../../shareds/models/address";
import {Product} from "../../../shareds/models/Product";


class CartProps {
    total: number
    totalItems: number
}

// creation of our address store with withEntities, withCollectionIds
/**
 * store {
 *     name : address
 *     entities : address[]
 *     collectionsId : []
 * }
 */
const store = createStore(
    {name: 'carts'},
    // for manage product
    withEntities<Product>(),
    //for storing product ids
    withProps<CartProps>({total: 0, totalItems: 0}),
);

@Injectable({providedIn: 'root'})
export class CartRepository {
    products$ = store.pipe(selectAllEntities());
    total$ = store.pipe(select((state) => state.total));
    totalItem = store.pipe(select((state) => state.totalItems));

    addToCart(product: Product, quantity: number) {
        const existingProduct = store.query(getEntity(product.id));

        if (existingProduct) {
            // If the product already exists in the cart, update its quantity
            const updatedProduct = {...existingProduct, quantity: existingProduct.qte + quantity};
            this.updateProduct(updatedProduct)
        } else {
            // Otherwise, add the product to the cart with the specified quantity
            const newProduct = {...product, quantity};
            this.addNewProduct(product)
        }

    }


    removeInCart(address: Address) {

    }

    clearCart() {
        store.reset()
    }


    updateProduct(product: Product) {
        store.update(
            updateEntities(product.id,
                product
            )
        );
    }

    addNewProduct(product: Product) {
        store.update(
            addEntities(product)
        )
    }

}
