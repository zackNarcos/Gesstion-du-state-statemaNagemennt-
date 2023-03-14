import {Component, OnInit} from '@angular/core';
import {Product} from "../../shareds/models/Product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../shareds/services/api/products.service";
import {Router} from "@angular/router";
import {NotiflixService} from "../../shareds/services/notiflix.service";
import {AppStateInterface} from "../../store/app.state.interface";
import {Store} from "@ngrx/store";
import {ProductActionsList} from "../../store/actions/product.actions";

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
    addProductForm: any;

    constructor(
        private router: Router,
        private notifService: NotiflixService,
        private store: Store<AppStateInterface>,
    ) {
    }

    ngOnInit(): void {
        this.addProductForm = new FormGroup<any>(
            {
                name: new FormControl("", [Validators.required]),
                price: new FormControl(0, [Validators.required, Validators.min(0)]),
                image: new FormControl("https://dummyimage.com/450x300/dee2e6/6c757d.jpg", [Validators.required]),
                description: new FormControl("", [Validators.required]),
            }
        )
    }

    save() {
        let product: Product =
            {
                id: 0,
                qte: 0,
                name: this.addProductForm.value.name,
                price: this.addProductForm.value.price,
                image: this.addProductForm.value.image,
                description: this.addProductForm.value.description
            }

        this.store.dispatch(ProductActionsList.addProduct({product: product}));
        this.notifService.success("Product added successfully");
        this.router.navigate(["/"]);

    }

}
