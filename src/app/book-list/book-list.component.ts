import { Component, OnInit } from '@angular/core';
import { BookShopService } from '../book-shop.service';
import { Book } from './Book';
import { Oferta } from './Oferta';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  ofertas: Oferta [] = [

    {
      spring: false,
      summer: false,
      fall: false,
      winter: true,
    }
  ];

  books: Book [] = [

    {
      imagen: '../../assets/img/book.jpg',
      tipo: 'Tapa blanda',
      titulo: 'Bootstrap',
      autor: 'Juan Perez',
      materia: 'Web1',
      precio: 50,
      oferta: true,
      cantidad: 0,
      stock: 0,
    },

    {
      imagen: '../../assets/img/ebook.jpg',
      tipo: 'Ebook',
      titulo: 'Java',
      autor: 'Jose Garcia',
      materia: 'Programacion',
      precio: 75,
      oferta: false,
      cantidad: 0,
      stock: 5,
    },

    {
      imagen: '../../assets/img/book.jpg',
      tipo: 'Tapa blanda',
      titulo: 'Estadistica',
      autor: 'Mario Rodriguez',
      materia: 'TMC',
      precio: 90,
      oferta: true,
      cantidad: 0,
      stock: 5,
    },

    {
      imagen: '../../assets/img/ebook.jpg',
      tipo: 'Ebook',
      titulo: 'Git',
      autor: 'Ana Gonzales',
      materia: 'TIO',
      precio: 85,
      oferta: false,
      cantidad: 0,
      stock: 5,
    }
  ];

  constructor(private shop: BookShopService) {  }

  ngOnInit(): void {
  }

  agregarEnShopList(book): void {
    this.shop.agregarEnShopList(book);
    book.stock -= book.cantidad;
    book.cantidad = 0;
  }

}
