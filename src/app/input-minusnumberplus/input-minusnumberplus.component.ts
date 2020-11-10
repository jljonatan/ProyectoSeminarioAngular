import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book-list/Book';

@Component({
  selector: 'app-input-minusnumberplus',
  templateUrl: './input-minusnumberplus.component.html',
  styleUrls: ['./input-minusnumberplus.component.scss']
})
export class InputMinusnumberplusComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad: number;

  @Input()
  maximo: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  /**
   * crear mensaje de alerta sin utilizar el "alert()"
   */
  // @Output()
  // maximoAlcanzado: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  masCantidad(): void {
    if (this.cantidad < this.maximo) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    /**
     * crear mensaje de alerta sin utilizar el "alert()"
     */
    // else {
    //   this.maximoAlcanzado.emit();
    // }
  }

  menosCantidad(): void {
    if (this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  cambioCantidad(event): void {
    // hay que modificar esto...
    event.preventDefaul();
    this.cantidadChange.emit(this.cantidad);
  }

}
