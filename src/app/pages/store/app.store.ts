import {Product} from "../../shareds/models/Product";
import {createStore, withProps} from "@ngneat/elf";
import {withEntities} from "@ngneat/elf-entities";

class ProductProps {
    product: Product | null
}

// creation of our Product store with withEntities, withCollectionIds
/**
 * store {
 *     name : product
 *     entities : product[]
 *     collectionsId : []
 * }
 */

export const productStore = createStore(
    {name: 'products'},
    // for manage product
    withEntities<Product>(),
    //for storing product ids
    withProps<ProductProps>({product: null}),
);



