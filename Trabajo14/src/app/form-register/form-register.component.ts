import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  @Input() values: any;

}
