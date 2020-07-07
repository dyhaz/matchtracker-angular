import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { CircularSpinnerComponent } from '../components/spinner/circular-spinner.component';

@Directive({ selector: '[appLazyLoad]' })
export class LazyloadDirective {
  @Input() uiLazyLoad: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }

  load() {
    const img = this.el.nativeElement;
    if (img.src) {
      return;
    }
    img.src = this.uiLazyLoad;
    // this.renderer.listen(img, "load", (event) => { });
  }
}
