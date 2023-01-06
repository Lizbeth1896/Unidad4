import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
  selector: '[appMyfocus]'
})
export class MyfocusDirective implements OnInit{

  constructor(private elementRef: ElementRef) { 

  }

  ngOnInit() {
    this.elementRef.nativeElement.focus();
  }

}
