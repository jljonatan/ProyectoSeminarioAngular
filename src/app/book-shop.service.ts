import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book-list/Book';

@Injectable({
  providedIn: 'root'
})

export class BookShopService {

  private _listaDeCompras: Book [] = [];

  listaDeCompras: BehaviorSubject<Book[]> = new BehaviorSubject([]);

  constructor() { }

  agregarEnShopList(book: Book) {
    let item: Book = this._listaDeCompras.find((v1) => v1.titulo === book.titulo);
    if (!item){
      this._listaDeCompras.push({ ... book});
    }
    else {
      item.cantidad += book.cantidad;
    }
    console.log(this._listaDeCompras);
    this.listaDeCompras.next(this._listaDeCompras);
  }

}
