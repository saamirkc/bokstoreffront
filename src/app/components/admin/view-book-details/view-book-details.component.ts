import { Component, OnInit } from '@angular/core';
import {Book} from '../../../common/book';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../../services/book.service';
import {CartService} from '../../../services/cart.service';
import {CartItem} from '../../../common/cart-item';
import baseUrl from '../../../common/helper';
@Component({
  selector: 'app-view-book-details',
  templateUrl: './view-book-details.component.html',
  styleUrls: ['./view-book-details.component.css']
})
export class ViewBookDetailsComponent implements OnInit {

  book: Book = new Book();

  constructor(private _activatedRoute: ActivatedRoute,
              private _bookService: BookService,
              private _cartService: CartService) {
  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(
      () => {
        this.getBookInfo();
      }
    )
  }

  getBookInfo() {
    const id: number = +this._activatedRoute.snapshot.paramMap.get('id');

    this._bookService.get(id).subscribe(
      data => {
        this.book = data;
      }
    );
  }

  addToCart() {
    console.log(`book name: ${this.book.name}, and price: ${this.book.unitPrice}`);
    const cartItem = new CartItem(this.book);
    this._cartService.addToCart(cartItem);
  }
}
