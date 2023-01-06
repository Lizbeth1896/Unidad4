import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ],
   exports:[ContentComponent]
})
export class CrewModule { }
