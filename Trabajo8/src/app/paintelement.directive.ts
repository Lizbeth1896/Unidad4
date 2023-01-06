import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appPaintelement]'
})
export class PaintelementDirective implements OnInit {

  constructor(private elementRef: ElementRef, private rendered2: Renderer2) { }

  ngOnInit(){
    const element =this.elementRef.nativeElement
    this.rendered2.setStyle(element, 'color','#005074')
    this.rendered2.setStyle(element, 'background-color', '#f3e6f6')
  }

}
