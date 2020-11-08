import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { ShopListComponent } from './shop-list/shop-list.component';

import { FormsModule } from '@angular/forms';
import { BookstoreHomeComponent } from './bookstore-home/bookstore-home.component';
import { BookstoreAboutComponent } from './bookstore-about/bookstore-about.component';
import { InputMinusnumberplusComponent } from './input-minusnumberplus/input-minusnumberplus.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ShopListComponent,
    BookstoreHomeComponent,
    BookstoreAboutComponent,
    InputMinusnumberplusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
