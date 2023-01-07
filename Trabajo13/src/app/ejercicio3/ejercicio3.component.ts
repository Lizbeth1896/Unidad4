import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component {
  resultado: string;
  fecha: string | null = '2023-01-06';
  hora: string | null = '22:00:00';
  tipoMoneda:string='0';
  cambio: boolean=false;
  currDate: Date = new Date();
}
