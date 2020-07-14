import { Directive, ElementRef, HostListener, Input } from '@angular/core';

declare var $: any;

/**
 * Produce fade in effect for clicked element
 */
@Directive({
  selector: '[appFadeIn]'
})
export class BackgroundFadeInDirective {
  @Input() appFadeIn;
  @Input() selected = false;
  @Input() highlightColor = '#ff2a68';

  constructor(private el: ElementRef) {
    setTimeout(() => {
      if (this.selected) {
        this.in();
      }
    }, 1000);
  }

  @HostListener('click')
  public fade() {
    setTimeout(() => {
      $('.ui-effects-placeholder').remove();
      if (!this.selected) {
        this.in();
      } else {
        this.out();
      }

      this.selected = !this.selected;
    }, 1);
  }

  in() {
    const element = $(this.el.nativeElement);
    const icon = element.find('i');

    if (!icon.hasClass('fas')) {
      icon.attr('class', 'btn-heart-icon');
      $(this.el.nativeElement).attr('class', 'waves-effect waves-light btn-floating bg-red');
    } else {
      element.stop().animate( { 'background-color': this.highlightColor }, 500);
      icon.css('box-shadow', '0 0 20px #272727');
    }

    $(element).find('i').effect('bounce', 500);
  }

  out() {
    const element = $(this.el.nativeElement);
    const icon = element.find('i');

    if (!icon.hasClass('fas')) {
      icon.attr('class', 'btn-heart-empty-icon');
      $(this.el.nativeElement).attr('class', 'waves-effect waves-light btn-floating bg-black');
    } else {
      element.stop().animate( { 'background-color': '#272727' }, 500);
      icon.css( 'box-shadow', 'none');
    }
  }
}
