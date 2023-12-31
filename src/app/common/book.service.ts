import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http: HttpClient) {
  }

//   add books
  public addBook(book: any) {
    return this._http.post(`${baseUrl}/book/`, book);
}

// load all books
  public getBook() {
    return this._http.get(`${baseUrl}/book/`);
  }
}
