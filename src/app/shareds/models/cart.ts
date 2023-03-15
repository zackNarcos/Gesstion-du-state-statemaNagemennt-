import {Product} from "./product";

export interface Cart {
    products: Product[]
    total: number
    totalItems: number
}
