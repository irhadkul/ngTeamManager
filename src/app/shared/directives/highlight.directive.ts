import {Directive, ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appHighlightElement]'
})
export class HighlightDirective  {

  constructor(private elem: ElementRef) {

  }
  @HostListener('mouseenter') onMouseEnter() {
    this.elem.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elem.nativeElement.style.color = 'inherit';
  }

}
