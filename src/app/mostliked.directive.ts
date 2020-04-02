import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMostliked]'
})
export class MostlikedDirective {

  constructor(private elem:ElementRef){

    this.elem.nativeElement.style.color="blue"

  }

}
