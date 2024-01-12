import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../common/book.service';
import Swal from 'sweetalert2';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
getBook: any = [

];
  constructor(private _book: BookService) { }

  ngOnInit() {

    this._book.getBook().subscribe((data:any)=>{
        this.getBook=data;
        console.log(this.getBook);

      },
      (error)=>{
        console.log(error);
        Swal.fire('error','Error in loading data','error');
      });
  }

  deleteBook(bookId) {
    Swal.fire({
      icon:"info",
      title:"Are you sure?",
      confirmButtonText:"Delete",
      showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){
        this._book.deleteBook(bookId).subscribe(
          (data)=>{
            this.getBook= this.getBook.filter((book:any) => book.id!=bookId);
            Swal.fire('Success!!','Book deleted','success');
          },
          (error)=>{
            Swal.fire('Error!!','Error in deleting book','error');
          }  );
      }
    })
  }

  // serveImage(imageUrl: any) {
  //   this._book.serveImage(imageUrl).subscribe(
  //     (data:any)=>{
  //       Swal.fire("Yeap!",'image added','success');
  //     },
  //   (error)=>{
  //     Swal.fire('Error',"Error in loading/adding image",'error');
  //   }
  //   );
  // }
  // serveImage(imageUrl: string): string {
  //   // Assuming the base URL is baseUrl
  //   return `${baseUrl}/book/images/${imageUrl}`;
  // }
  // getProfileImage(imageUrl: string): Observable<Blob> {
  //   return this._book.getProfileImage(imageUrl);
  //   console.log(this.getProfileImage(imageUrl));
  // }
}

