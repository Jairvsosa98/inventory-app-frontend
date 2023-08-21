import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  products: Product[];

  constructor(private productService: ProductService, private router: Router) { }
  ngOnInit() {
    // Cargamos todos los productos
    this.getListProducts();
  }

  private getListProducts() {
    // obtener los datos del observable - Suscribirnos
    this.productService.getListProducts().subscribe((data => {
      this.products = data
    }));
  }
  editProduct(id: Number) {
    this.router.navigate(['edit-product', id]);
  }
  deleteProduct(id: Number) {
    this.productService.deleteProduct(id).subscribe(
      {
        next: (data) => this.getListProducts(),
        error: (errors) => console.log(errors)
      }
    );
  }
}
