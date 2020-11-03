import { Component, OnInit } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  ofertaMayor = true;

  books: Book [] = [

    {
      imagen: '../../assets/img/book.jpg',
      tipo: 'Tapa blanda',
      titulo: 'Bootstrap',
      autor: 'Juan Perez',
      materia: 'Web1',
      precio: 50,
      oferta: true,
    },

    {
      imagen: '../../assets/img/ebook.jpg',
      tipo: 'Ebook',
      titulo: 'Java',
      autor: 'Jose Garcia',
      materia: 'Programacion',
      precio: 75,
      oferta: false,
    },

    {
      imagen: '../../assets/img/book.jpg',
      tipo: 'Tapa blanda',
      titulo: 'Estadistica',
      autor: 'Mario Rodriguez',
      materia: 'TMC',
      precio: 90,
      oferta: false,
    },

    {
      imagen: '../../assets/img/ebook.jpg',
      tipo: 'Ebook',
      titulo: 'Git',
      autor: 'Ana Gonzales',
      materia: 'TIO',
      precio: 85,
      oferta: false,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
