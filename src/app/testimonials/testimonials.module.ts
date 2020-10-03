import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialsComponent } from './testimonials.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [TestimonialsComponent],
  imports: [
    CommonModule,
    TestimonialsRoutingModule,
    CarouselModule
  ]
})
export class TestimonialsModule { }
