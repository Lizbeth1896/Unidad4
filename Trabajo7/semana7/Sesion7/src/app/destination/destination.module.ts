import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports:[BodyComponent]
})
export class DestinationModule { }
