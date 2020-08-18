import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyListingRoutingModule } from './property-listing-routing.module';
import { PropertyListingComponent } from './property-listing.component';


@NgModule({
  declarations: [PropertyListingComponent],
  imports: [
    CommonModule,
    PropertyListingRoutingModule
  ]
})
export class PropertyListingModule { }
