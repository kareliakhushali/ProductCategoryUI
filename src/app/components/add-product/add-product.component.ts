import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/shared/category';
import { Status } from '../../shared/status';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm!:FormGroup;
  categories!:Category[]; //for binding a category dropdown
  status!:Status;
  get f(){
    return this.productForm.controls; //will be used in validation
  }
  // constructor(private fb:FormBuilder,private productService:ProductService,private route:ActivatedRoute,private categoryService:CategoryService) {
  //   const id = route.snapshot.params['id'];
  //   if(id){
  //     productService.getById(id).subscribe(
  //       {
  //         next :(res)=>{

  //           this.productForm.patchValue(res);
  //         },
  //         error:(err)=>{
  //           console.log(err);
  //         }
  //       }
  //     )
  //   }
  //  }
  constructor(private fb:FormBuilder,private categoryService:CategoryService,private productService:ProductService,private route:ActivatedRoute) {
    //for edit get the id
    const id = route.snapshot.params['id'];
    if(id){
      productService.getById(id).subscribe(
        {
          next :(res)=>{

            this.productForm.patchValue(res);
          },
          error:(err)=>{
            console.log(err);
          }
        }
      )
    }
  }
  // ngOnInit() {
  //   this.productForm = this.fb.group({
  //     id:[0],
  //     productname:[
  //       '',
  //       [
  //         Validators.required,
  //         Validators.minLength(2),
  //         Validators.pattern("[a-zA-Z].*")
  //       ],
  //     ],
  //     category:[
  //       '',
  //       [
  //         Validators.required
  //       ],
  //     ],
  //     price:[
  //       '',
  //       [
  //         Validators.required,
  //         Validators.pattern("[a-zA-Z].*")
  //       ]
  //     ]

  //   })
  // }
  ngOnInit(): void {
    this.productForm= this.fb.group({
      'id':[0],
      'name':['',Validators.required],
      'categoryId':[0,Validators.required],
      'price':[0,Validators.required]
    })

this.getCategories();
  }
  // get ProductName():FormControl{
  //   return this.productForm.get('productname') as FormControl;
  // }
  // get Category():FormControl{
  //   return this.productForm.get('category') as FormControl;
  // }
  // get Price():FormControl{
  //   return this.productForm.get('price') as FormControl;
  // }
  onPost()
  {
    this.status={statusCode:0,message:'wait..'};
    this.productService.addUpdate(this.productForm.value).subscribe({
      next :(res)=>{
        this.status = res;
        if(this.status.statusCode == 1)
        {
          this.productForm.reset();
        }
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  // we require this to get it in dropdown
  private getCategories()
  {
    this.categoryService.getAll().subscribe({
      next : (res)=>{
        this.categories = res;
      },
      error:(err)=>
      {
console.log(err);
      }
    })

  }

}




