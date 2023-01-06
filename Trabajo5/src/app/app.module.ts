import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextInputComponent } from './componentes/text-input/text-input.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { ButtonComponent } from './componentes/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    CalculadoraComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
