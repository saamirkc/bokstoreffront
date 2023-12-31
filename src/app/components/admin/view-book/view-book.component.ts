import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../common/book.service';
import Swal from 'sweetalert2';

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
}
