import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  fazerAlgo(): void {
    console.log('Fazendo algo');
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Operação executada com sucesso!');
      this.router.navigate(['/products']);
    });

  }

  cancelProduct(): void {
    this.router.navigate(['/products']);
  }
}
