import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../common/category.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{
  bookCategory = {
    categoryName:'',

  };
  constructor(private _category: CategoryService,private _snack: MatSnackBar) {
  }
  ngOnInit() {
  }
  formSubmit(){
    if(this.bookCategory.categoryName.trim()==''||this.bookCategory.categoryName==null){
      this._snack.open('Title is required!!','',{
        duration:3000
      })
      return;
    }
    //all done
    this._category.addCategory(this.bookCategory).subscribe(
      (data:any)=>{
        this.bookCategory.categoryName='';
        Swal.fire('Success!!','Category added successfully','success');
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error!!','Server error','error');
      }
    );

  }



}

