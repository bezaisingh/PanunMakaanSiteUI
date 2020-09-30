import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPropertyRoutingModule } from './list-property-routing.module';
import { ListPropertyComponent } from './list-property.component';
import { ResidentialComponent } from './residential/residential.component';
import { CommercialComponent } from './commercial/commercial.component';
import { LandComponent } from './land/land.component';


@NgModule({
  declarations: [ListPropertyComponent, ResidentialComponent, CommercialComponent, LandComponent],
  imports: [
    CommonModule,
    ListPropertyRoutingModule
  ]
})
export class ListPropertyModule { }
