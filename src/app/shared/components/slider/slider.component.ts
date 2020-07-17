import {Component, OnInit} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      $('.slider-slide').owlCarousel({
        items: 1,
        slideSpeed: 1000,
        dots: true,
        paginationSpeed: 400,
        singleItem: true,
        loop: true,
        margin: 10
      });
    }, 100);
  }
}
