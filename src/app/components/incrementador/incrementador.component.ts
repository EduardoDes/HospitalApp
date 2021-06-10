import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent  {

  @Input() progreso : number = 50 ;
  @Output() valorSalida : EventEmitter<number> = new EventEmitter();

  get getPorcentaje(){
    return `${this.progreso}%`;
  }

  cambiarValor (valor : number) {

    if(this.progreso >= 100 && valor >= 0){
       this.valorSalida.emit(100);
       this.progreso = 100;
    }
    else if(this.progreso <= 0 && valor < 0){
       this.valorSalida.emit(0);
       this.progreso = 0;
   }else{
        this.valorSalida.emit(this.progreso);
        this.progreso = this.progreso + valor;
   }
    
  }
 

}
