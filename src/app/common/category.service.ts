import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "./helper";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) {
  }
  // load all the categories
  public categories(){
    return this._http.get(`${baseUrl}/category/`);
  }
// add category
  public addCategory(bookCategory:any) {
    return this._http.post(`${baseUrl}/category/`, bookCategory);
  }
//   public deleteCategory(id: any){
//   return this._http.delete(`${baseUrl}/category/${id}`);
// }

 }
