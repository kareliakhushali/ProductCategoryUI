import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!:Product[];
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit() {
    this.getProducts();
  }

  navigateToAddProduct() {
    this.router.navigate(['/add-product']);
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
  edit(id:number):void{
    this.router.navigate([`/update-product/${id}`]);

  }
  delete(id:number,index:number):void
  {
if(window.confirm("Are you sure you want to delete the product?"))
{
  this.productService.delete(id).subscribe({
    next : (res)=>{
      if(res.statusCode==1){
        this.products.splice(index,1);
      }
      else{
        console.log(res.message);
      }
    },
    error:(err)=>{
      console.log(err);
    }

  })

}
  }
//   search(term:string)
//   {
//     console.log("term = "+term);
// this.getProducts(term);
//   }


}
