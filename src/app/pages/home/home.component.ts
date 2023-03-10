import {Component, OnInit} from '@angular/core';
import {Product} from "../../shareds/models/Product";
import {Observable} from "rxjs";
import {ProductsService} from "../../shareds/services/api/products.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$: Observable<Product[]> | undefined;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }


}
