import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { Product } from './../product.model';


import { FormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [ 
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
      
    
  ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})

export class ProductCreateComponent implements OnInit{

  product: Product = {
    name:'',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router
    ) { }
  
  ngOnInit(): void {
    
  }

  createProduct():void {
    this.productService.create(this.product).subscribe (() => {      
      this.productService.showMensage('Produto criado !')      
      this.router.navigate(['/products'])
    })
  }

  cancel():void {
    this.router.navigate(['/products'])
  }

}
