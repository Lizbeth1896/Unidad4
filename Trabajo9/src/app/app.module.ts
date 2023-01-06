import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { ButtonComponent } from './componentes/button/button.component';
import { MyfocusDirective } from './myfocus.directive';
import { FormsModule } from '@angular/forms';
import { PaintelementDirective } from './paintelement.directive';
import { ColortitleDirective } from './colortitle.directive';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    ButtonComponent,
    MyfocusDirective,
    PaintelementDirective,
    ColortitleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
