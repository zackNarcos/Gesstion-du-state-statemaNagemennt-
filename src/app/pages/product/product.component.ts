import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../shareds/models/product";
import {NotiflixService} from "../../shareds/services/notiflix.service";
import {Store} from "@ngxs/store";
import {ProductAction} from "../../store/actions/product.action";
import {ProductsState} from "../../store/states/product.state";
import {CartAction} from "../../store/actions/cart.action";
import {CartService} from "../../shareds/services/cart.service";
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  id: number
  product$: Observable<Product>
  qteCom: number = 1;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private store: Store,
      private cartService: CartService,
      private notiflixService: NotiflixService
  ) {
  }
  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    /*interval(1000).subscribe((data) => {
      if (data == 0){
        this.id = 1;
      }else {
        this.id = data;
      }
    });*/
    this.store.dispatch(new ProductAction.SetSelected(this.id)).subscribe({
      next:(data)=>{
        this.product$ = this.store.select(ProductsState.getSelectedProduct)
      },
      error:()=>{
        this.notiflixService.failure("Product not found")
        this.router.navigateByUrl('/')
      }
    })
  }

  addToCart(value: string) {
    let product: Product
    this.product$.subscribe(data => product = data)
    this.cartService.addItem(product, parseInt(value))
  }
}
