import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'list-property',
    loadChildren: () => import('./list-property/list-property.module').then( m => m.ListPropertyModule )
  },
  {
    path: 'property-listing',
    loadChildren: () => import('./property-listing/property-listing.module').then( m => m.PropertyListingModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
