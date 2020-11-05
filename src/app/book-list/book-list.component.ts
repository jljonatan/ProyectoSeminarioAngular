import { Component, OnInit } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  ofertaInvierno = true;

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
    },

    {
      imagen: '../../assets/img/book.jpg',
      tipo: 'Tapa blanda',
      titulo: 'Estadistica',
      autor: 'Mario Rodriguez',
      materia: 'TMC',
      precio: 90,
      oferta: false,
      cantidad: 0,
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
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  masCantidad(book: Book): void {
    if (book.cantidad < 5){
    book.cantidad++;
    }
  }

  menosCantidad(book: Book): void {
    if (book.cantidad > 0){
    book.cantidad--;
    }
  }

  cambioCantidad(event, book: Book): void {
    // hay que modificar esto...
    event.preventDefaul();
  }

}
