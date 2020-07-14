import {Component} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  constructor() {}

  show() {
    $('#myNav').css('width', '100%');
    /**
     * Disable scrolling
     */
    $('html, body').css({
      overflow: 'hidden',
      height: '100%'
    });
  }

  close() {
    $('#myNav').css('width', '0%');
    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
    });
  }
}
