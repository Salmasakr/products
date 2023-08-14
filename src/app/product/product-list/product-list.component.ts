import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.getAllProducts();
  }


  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data: any) => {
        this.products = data.products;
      }
    })
  }

}
