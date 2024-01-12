// import { Component, OnInit } from '@angular/core';
// import {BookService} from '../../../common/book.service';
// import {CategoryService} from '../../../common/category.service';
// import {MatSnackBar} from '@angular/material/snack-bar';
// import Swal from 'sweetalert2';
//
// @Component({
//   selector: 'app-add-book',
//   templateUrl: './add-book.component.html',
//   styleUrls: ['./add-book.component.css']
// })
// export class AddBookComponent implements OnInit {
//   categories: any = [];
//   bookData: any = {
//     name: '',
//     description: '',
//     // stockKeepingUnit: '',
//     // imageUrl: '',
//     unitPrice: '',
//     unitsInStock: '',
//     active: true,
//     category: {
//       id: ''
//     }
//
//   };
//
//   constructor(private cat: CategoryService, private book: BookService, private snack: MatSnackBar) {
//
//   }
//
//   ngOnInit() {
//     this.cat.categories().subscribe(
//       (data: any) => {
//         this.categories = data;
//         console.log(this.categories);
//       },
//       (error) => {
//         console.log(error);
//         Swal.fire('Error!!', 'Error in server', 'error');
//       }
//     );
//   }
//
//   addBook() {
//     if (this.bookData.name.trim() === '' || this.bookData.name == null) {
//       this.snack.open('Name is required', '', {
//         duration: 3000,
//       });
//       return;
//     }
//     this.book.addBook(this.bookData).subscribe(
//       (data) => {
//         this.bookData.name = '';
//         this.bookData.description = '';
//         // this.bookData.stockKeepingUnit = '';
//         // this.bookData.imageUrl = '';
//         this.bookData.unitPrice = '';
//         this.bookData.unitsInStock = '';
//         this.bookData.category = '';
//         Swal.fire('Success!!!', 'Successfully added', 'success');
//       },
//       (error) => {
//         Swal.fire('Error!!!', 'Error in server', 'error');
//         console.log(error);
//       });
//
//
//   }
//
// }




import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../common/book.service';
import { CategoryService } from '../../../common/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    unitPrice: '',
    unitsInStock: '',
    active: true,
    imageUrl: '',
    category: {
      id: ''
    }
  };

  selectedFile: File | null = null;

  constructor(private cat: CategoryService, private book: BookService, private snack: MatSnackBar) {}

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

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  addBook() {
    if (this.bookData.name.trim() === '' || this.bookData.name == null) {
      this.snack.open('Name is required', '', {
        duration: 3000,
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile as Blob);
    formData.append('book', JSON.stringify(this.bookData));

    this.book.addBook(formData).subscribe(
      (data) => {
        this.bookData.name = '';
        this.bookData.description = '';
        this.bookData.unitPrice = '';
        this.bookData.unitsInStock = '';
        this.bookData.imageUrl = '';
        this.bookData.category = '';
        Swal.fire('Success!!!', 'Successfully added', 'success');
      },
      (error) => {
        Swal.fire('Error!!!', 'Error in server', 'error');
        console.log(error);
      });

  }



}
