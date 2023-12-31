import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './services/book.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookCategoryComponent } from './components/book-category/book-category.component';
import { SearchComponent } from './components/search/search.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import {authInterceptorProviders} from './common/auth.interceptor';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ViewCategoryComponent } from './components/admin/view-category/view-category.component';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import { ViewBookComponent } from './components/admin/view-book/view-book.component';
import { AddBookComponent } from './components/admin/add-book/add-book.component';
import { ViewBookDetailsComponent } from './components/admin/view-book-details/view-book-details.component';
import {MatSelectModule, MatSlideToggleModule} from '@angular/material';



// client side paging
// import { JwPaginationComponent } from 'jw-angular-pagination';


const routes: Routes = [
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path: 'books', component: BookListComponent},
  {path: 'search/:keyword', component: BookListComponent},
  {path: 'category/:id', component: BookListComponent},
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',

  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: DashboardComponent,
    children : [
      {
        path: 'categories',
        component : ViewCategoryComponent,
      },
      {
        path: 'add-category',
        component : AddCategoryComponent,
      },
      {
        path: 'view-book',
        component : ViewBookComponent,
      },
      {
        path: 'add-book',
        component : AddBookComponent,
      },
      {
        path: 'view-book/:id',
        component: ViewBookDetailsComponent,
      }
    ]
  },
  {
    path: 'payment',
    component: PaymentComponent,
    pathMatch: 'full',
  },

  {path: '', redirectTo: '/books', pathMatch: 'full'},

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PageNotFoundComponent,
    BookCategoryComponent,
    SearchComponent,
    BookDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    PaymentComponent,
    SidebarComponent,
    ViewCategoryComponent,
    AddCategoryComponent,
    ViewBookComponent,
    AddBookComponent,
    ViewBookDetailsComponent,

    // client side paging
    // JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSelectModule,
  ],
  providers: [
    BookService,
    authInterceptorProviders,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
