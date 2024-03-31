import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { MatTableModule } from '@angular/material/table'
import { CommonModule , CurrencyPipe } from '@angular/common';
import { ProductUpdateComponent } from '../product-update/product-update.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';


@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [
    ProductUpdateComponent,
    ProductDeleteComponent,
    MatTableModule,
    CommonModule,
    CurrencyPipe,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})

export class ProductReadComponent implements OnInit {

  products: Product[] = [] 
  valorFormatado: string = ''
  displayedColumns = ['id','name','price','action']

  constructor (private productService: ProductService) {
    
  }


  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      // console.log(products)
    })
    
  }


  
} 
