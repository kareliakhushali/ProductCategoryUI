import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  products!:Product[];
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit() {
  }
  private getProducts()
  {
    this.productService.getAll().subscribe({
      next : (res)=>{
        this.products = res;
      },
      error:(err)=>
      {
console.log(err);
      }
    })

  }
}
