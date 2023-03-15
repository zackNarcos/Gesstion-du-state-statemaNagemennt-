import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../shareds/models/Product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NotiflixService} from "../../shareds/services/notiflix.service";
import {AppStateInterface} from "../../store/app.state.interface";
import {Store} from "@ngrx/store";
import {ProductActionsList} from "../../store/actions/product.actions";
import {Observable, Subscription} from "rxjs";
import {ProductFormSelectors} from "../../store/selectors/product-form.selectors";
import {ProductFormActions} from "../../store/actions/product-form.actions";

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss'],

})
export class AddProductComponent implements OnInit, OnDestroy {
    addProductForm: FormGroup = new FormGroup<any>(
        {
            name: new FormControl("", [Validators.required]),
            price: new FormControl(0, [Validators.required, Validators.min(0)]),
            image: new FormControl("https://dummyimage.com/450x300/dee2e6/6c757d.jpg", [Validators.required]),
            description: new FormControl("", [Validators.required]),
        }
    );
    formSubscription: Subscription | undefined;
    productForm$: Observable<any> = this.store.select(ProductFormSelectors.productFormSelector);

    constructor(
        private router: Router,
        private notifService: NotiflixService,
        private store: Store<AppStateInterface>,
    ) {

    }

    ngOnInit(): void {

        this.productForm$.subscribe((product) => {
            this.addProductForm.patchValue(product);
        });

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
        this.resetForm();
        this.notifService.success("Product added successfully");
        this.router.navigate(["/"]);

    }

    onFormUpdate(): void {
        this.store.dispatch(ProductFormActions.productUpdateForm({product: this.addProductForm.value}));
    }

    resetForm(): void {
        this.store.dispatch(ProductFormActions.productResetForm());
    }

    ngOnDestroy(): void {

        if (this.formSubscription) {
            this.formSubscription.unsubscribe();
        }

    }


}
