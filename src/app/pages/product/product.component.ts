import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../shareds/services/api/products.service";
import {Product} from "../../shareds/models/Product";
import {CartService} from "../../shareds/services/cart.service";
import {NotiflixService} from "../../shareds/services/notiflix.service";
import {Store} from "@ngrx/store";
import {AppStateInterface} from "../../store/app.state.interface";
import {ProductActionsList} from "../../store/actions/product.actions";
import {CartActionsList} from "../../store/actions/cart.actions";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    id: number;
    product: Product ;
    qteCom: number = 1;

    constructor(
        private route: ActivatedRoute,
        private notiflixService: NotiflixService,
        private store: Store<AppStateInterface>,
    ) {
        this.store.select(state => state.products.product).subscribe(product => {
            this.product = product;
        })
    }

    ngOnInit(): void {
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        if (this.id) {
            this.store.dispatch(ProductActionsList.loadProduct({id: this.id}));
        }
    }
    addToCart(value: string) {
        if (this.product) {
            this.store.dispatch(CartActionsList.addItem({product: this.product, qteCom: parseInt(value)}));
            this.notiflixService.success(`${this.product.name} added to cart`)
        }
    }
}
