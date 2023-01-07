import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component implements OnInit {
  resultado: string;
  fecha: string | null = '2023-01-07';
  hora: string | null = '22:00:00';
  tipoMoneda:string='0';
  currDate: Date = new Date();

  constructor() {}

  ngOnInit(): void {
  }

}
