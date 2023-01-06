import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appColortitle]'
})
export class ColortitleDirective implements OnInit {

  constructor(private elementRef: ElementRef, private rendered2: Renderer2) { }

  ngOnInit(){
    const element =this.elementRef.nativeElement
    this.rendered2.setStyle(element, 'color','#003fc3')
  }

}
