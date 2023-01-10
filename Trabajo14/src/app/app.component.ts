import { Component } from '@angular/core';

interface ContactForm
{
  "name": string;
  "dni": boolean;
  "estado_civil": string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trabajo14';
  
  model = {
      name: '',
      dni: '',
      estado_civil: ''
  }

  valores='';

  onSubmit(values: any): void {
    console.log('Form values', values );
    this.valores = values;
  }

}
