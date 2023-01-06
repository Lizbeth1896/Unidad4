import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ContainerComponent]
})
export class ContentModule { }
