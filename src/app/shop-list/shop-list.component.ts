import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book-list/Book';
import { BookShopService } from '../book-shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  listaDeCompras$: Observable <Book[]>;

  constructor(private shop: BookShopService) {

    this.listaDeCompras$ = shop.listaDeCompras.asObservable();
  }

  ngOnInit(): void {
  }

}
