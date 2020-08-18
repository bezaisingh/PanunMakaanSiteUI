import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyListingComponent } from './property-listing.component';

const routes: Routes = [
  {
    path: '',
    component: PropertyListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyListingRoutingModule { }
