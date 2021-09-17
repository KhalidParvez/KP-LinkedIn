import { Directive, ElementRef, HostListener, Input } from '@angular/core';
 // Attribute directive
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private readonly el:ElementRef
  ) { 
    el.nativeElement.style.backgroundColor ="yellow";
  }

  @HostListener('mouseenter') onMouseEnter(){

  }

  @HostListener('mouseleave') onMouseLeave(){
    
  }
  @HostListener('click') onClick(){

    if(this.el.nativeElement.id = "btnButton"){

    }
    
  }

  @Input() appHightLight =" ";

  }
