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
  },
  {
    path: 'property-detail',
    loadChildren: () => import('./property-detail/property-detail.module').then( m => m.PropertyDetailModule )
  },
  {
    path: 'testimonials',
    loadChildren: () => import('./testimonials/testimonials.module').then( m => m.TestimonialsModule )
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "top"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
