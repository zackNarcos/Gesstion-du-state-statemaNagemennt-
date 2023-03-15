import {Product} from "../../shareds/models/Product";
import {createStore, withProps} from "@ngneat/elf";
import {withEntities} from "@ngneat/elf-entities";

class CartProps {
    total: number
    totalItems: number
}

// creation of our Product store with withEntities, withCollectionIds
/**
 * store {
 *     name : product
 *     entities : product[]
 *     collectionsId : []
 * }
 */

export const cartStore = createStore(
    {name: 'carts'},
    // for manage product
    withEntities<Product>(),
    //for storing product ids
    withProps<CartProps>({total: 0, totalItems: 0}),
);


