import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IndexComponent } from '../index/index.component';
import {LayoutsModule} from '../../shared/layouts/layouts.module';
import {SliderComponent} from '../../shared/components/slider/slider.component';
import {PopularComponent} from '../../shared/components/popular/popular.component';
import {TestimonialComponent} from '../../shared/components/testimonial/testimonial.component';
import {FeaturesComponent} from '../../shared/components/features/features.component';
import {LatestNewsComponent} from '../../shared/components/latest-news/latest-news.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  declarations: [
    IndexComponent,
    SliderComponent,
    PopularComponent,
    TestimonialComponent,
    FeaturesComponent,
    LatestNewsComponent
  ],
  exports: [
  ],
  providers: [
  ]
})
export class UiModule { }
