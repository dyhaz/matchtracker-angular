import { Directive, ElementRef, HostListener, Input } from '@angular/core';

declare var $: any;

/**
 * Produce fade in effect for clicked element
 */
@Directive({
  selector: '[appFadeIn]'
})
export class BackgroundFadeInDirective {
  @Input() appFadeIn?: string;
  @Input() selected = false;
  @Input() highlightColor = '#ff2a68';

  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event'])
  private fade() {

    setTimeout(() => {
      const element = $(this.el.nativeElement);
      $('.ui-effects-placeholder').remove();

      if (!this.selected) {
        element.stop().animate( { 'background-color': this.highlightColor }, 500);
        element.find('i').css('box-shadow', '0 0 20px #272727');
        $(element).find('i').effect('bounce', 500);
      } else {
        element.stop().animate( { 'background-color': '#272727' }, 500);
        element.find('i').css( 'box-shadow', 'none');
      }

      this.selected = !this.selected;
    }, 1);
  }
}
