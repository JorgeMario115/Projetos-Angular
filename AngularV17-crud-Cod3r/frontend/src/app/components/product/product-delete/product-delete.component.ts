import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit{
  
  product:Product = {
    name:'',
    price:null
  }

  constructor(
    private productService:ProductService,
    private router:Router,
    private route:ActivatedRoute
    ) {}

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe(
      product => {this.product = product})
  }

  deleteProduct():void {
    this.productService.delete(`${this.product.id}`).subscribe(() => {
      this.productService.showMensage('Produto Deletado com sucesso')
      this.router.navigate(['/products'])
    })
  }
  
  cancel():void {
    this.router.navigate(['/products'])
  }

}
