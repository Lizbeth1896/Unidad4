import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  
  operando1:number;
  operando2:number;
  resultado:number;

  onSumar():void {
    this.resultado = this.operando1 + this.operando2;
  }
}
