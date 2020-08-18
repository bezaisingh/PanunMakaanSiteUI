import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPropertyRoutingModule } from './list-property-routing.module';
import { ListPropertyComponent } from './list-property.component';


@NgModule({
  declarations: [ListPropertyComponent],
  imports: [
    CommonModule,
    ListPropertyRoutingModule
  ]
})
export class ListPropertyModule { }
