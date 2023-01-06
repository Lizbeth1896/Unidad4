import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [  
    ContainerComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class TecnologyModule { }
