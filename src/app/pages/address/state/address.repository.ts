import {Injectable} from '@angular/core';
import {createStore, select, withProps} from '@ngneat/elf';
import {
    addEntities,
    deleteEntities,
    selectAllEntities,
    setEntities,
    updateEntities,
    withEntities,
} from '@ngneat/elf-entities';
import {Address} from "../../../shareds/models/address";


class AddressProps {
    address: Address | null
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
    {name: 'addresses'},
    // for gerer address
    withEntities<Address>(),
    //for storing address ids
    withProps<AddressProps>({address: null})
);

@Injectable({providedIn: 'root'})
export class AddressRepository {
    addresses$ = store.pipe(selectAllEntities());

    selectedAddress$ = store.pipe(select((state) => state.address));

    setAddresses(addresses: Address[]) {
        store.update(setEntities(addresses));
    }

    updateAddress(address: Address) {
        store.update(
            updateEntities(address.id,
                address
            )
        );
    }

    addNewAddress(address: Address) {
        store.update(
            addEntities(address)
        )
    }

    removeAddress(id: number) {
        store.update(
            deleteEntities([id])
        )
    }

    setSelectAddress(user: Address) {
        store.update((state) => ({
            ...state,
            user,
        }));
    }

}
