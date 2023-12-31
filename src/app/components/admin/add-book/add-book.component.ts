import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../common/book.service';
import {CategoryService} from '../../../common/category.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  categories: any = [];
  bookData: any = {
    name: '',
    description: '',
    // stockKeepingUnit: '',
    // imageUrl: '',
    unitPrice: '',
    unitsInStock: '',
    active: true,
    category: {
      id: ''
    }

  };

  constructor(private cat: CategoryService, private book: BookService, private snack: MatSnackBar) {

  }

  ngOnInit() {
    this.cat.categories().subscribe(
      (data: any) => {
        this.categories = data;
        console.log(this.categories);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!!', 'Error in server', 'error');
      }
    );
  }

  addBook() {
    if (this.bookData.name.trim() === '' || this.bookData.name == null) {
      this.snack.open('Name is required', '', {
        duration: 3000,
      });
      return;
    }
    this.book.addBook(this.bookData).subscribe(
      (data) => {
        this.bookData.name = '';
        this.bookData.description = '';
        // this.bookData.stockKeepingUnit = '';
        // this.bookData.imageUrl = '';
        this.bookData.unitPrice = '';
        this.bookData.unitsInStock = '';
        this.bookData.category = '';
        Swal.fire('Success!!!', 'Successfully added', 'success');
      },
      (error) => {
        Swal.fire('Error!!!', 'Error in server', 'error');
        console.log(error);
      });


  }

}
