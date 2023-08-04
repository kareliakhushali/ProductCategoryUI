import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/shared/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories!:Category[];
  constructor(private categoryService:CategoryService,private router:Router) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories()
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
  navigateToAddCategory(){
    this.router.navigate(['/add-category']);
  }
  delete(id:number,index:number):void{
    if(window.confirm("Are your sure to delete??")){
    this.categoryService.delete(id).subscribe({
      next:(res)=>{
        if(res.statusCode==1){
          this.categories.splice(index,1);
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
  edit(id:number):void{
    this.router.navigate([`/update-catgeory/${id}`]);

  }
}
