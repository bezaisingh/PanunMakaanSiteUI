import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyListingRoutingModule } from './property-listing-routing.module';
import { PropertyListingComponent } from './property-listing.component';

import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PropertyListingComponent],
  imports: [
    CommonModule,
    PropertyListingRoutingModule,
    Ng5SliderModule,
    FormsModule,
    SharedModule
  ]
})
export class PropertyListingModule { }
