import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/shared/category';
import { Status } from 'src/app/shared/status';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm!:FormGroup;
  categories!:Category[]; //for binding a category dropdown
  status!:Status;
  get f(){
    return this.categoryForm.controls; //will be used in validation
  }
  constructor(private fb:FormBuilder,private categoryService:CategoryService,private route:ActivatedRoute) {
    //for edit get the id
    const id = route.snapshot.params['id'];
    if(id){
      categoryService.getById(id).subscribe(
        {
          next :(res)=>{

            this.categoryForm.patchValue(res);
          },
          error:(err)=>{
            console.log(err);
          }
        }
      )
    }
  }


  ngOnInit(): void {
    this.categoryForm= this.fb.group({
      'id':[0],
      'name':['',Validators.required]
    })
  }
  onPost()
  {
    this.status={statusCode:0,message:'wait..'};
    this.categoryService.addCategory(this.categoryForm.value).subscribe({
      next :(res)=>{
        this.status = res;
        if(this.status.statusCode == 1)
        {
          this.categoryForm.reset();
        }
      },
      error:(err)=>{
        console.log(err);
      }
    })

  }

}
