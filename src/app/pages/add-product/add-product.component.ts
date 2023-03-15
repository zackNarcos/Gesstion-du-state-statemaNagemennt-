import {Component, OnInit} from '@angular/core';
import {Product} from "../../shareds/models/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NotiflixService} from "../../shareds/services/notiflix.service";
import {Store} from "@ngxs/store";
import {ProductAction} from "../../store/actions/product.action";
import {ProductFormAction} from "../../store/actions/product-form.action";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{
  addProductForm: any ;
  constructor(
      private store: Store,
      private router: Router,
      private notifService: NotiflixService
  )
  {}

  ngOnInit(): void {
    this.addProductForm  = new FormGroup<any>(
        {
          name: new FormControl("", [Validators.required]),
          price: new FormControl(0, [Validators.required, Validators.min(0)]),
          image: new FormControl("https://dummyimage.com/450x300/dee2e6/6c757d.jpg", [Validators.required]),
          description: new FormControl("", [Validators.required]),
        }
    )
  }

  updateName() {
      this.store.dispatch(new ProductFormAction.UpdateName(this.addProductForm.value.name))
  }

  updatePrice() {
      this.store.dispatch(new ProductFormAction.UpdatePrice(this.addProductForm.value.price))
  }

  save() {
    let product: Product =
      {
          id: 0,
          qte: 0,
          name : this.addProductForm.value.name,
          price : this.addProductForm.value.price,
          image : this.addProductForm.value.image,
          description : this.addProductForm.value.description
      }

    this.store.dispatch(new ProductAction.Add(product)).subscribe( {
        next: data => {
            this.notifService.success(`Product: ${product.name} added with success`)
            this.router.navigate(['/'])
        },
        error:() => {
          this.notifService.failure(`Failled to add product: ${this.addProductForm.value.name}`)
      }
    })
  }

}
