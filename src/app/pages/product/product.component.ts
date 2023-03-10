import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../shareds/services/api/products.service";
import {Product} from "../../shareds/models/Product";
import {CartService} from "../../shareds/services/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
   id: string | null | undefined;
   product: Product | undefined
  qteCom: number = 1;
  constructor(
      private route: ActivatedRoute,
      private service: ProductsService,
      private cartService: CartService
  ) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getProduct(this.id).subscribe(prod => {
      this.product = prod
    })
  }

  addToCart(value: string) {

    if (this.product) {
      this.cartService.addToCard(this.product, parseInt(value))
    }
  }
}
