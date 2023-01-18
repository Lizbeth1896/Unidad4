import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

import { Product } from "src/app/models/product";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  categoryId: number | null = null;
  products: any = []

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = Number(params.get('categoryId'));
    });

    this.productsService.getAllProducts().subscribe((data: any) => {
      let _products: Product[] = data;
      _products.forEach((item: Product) => {
        if (item.category.id == this.categoryId) {
          this.products.push(item);
        }
      })
    });
  }
}
