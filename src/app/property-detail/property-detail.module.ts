import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyDetailComponent } from './property-detail.component';
import { Routes, RouterModule } from '@angular/router';

import { GalleryModule } from  'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';

const routes: Routes = [
  {
    path: '',
    component: PropertyDetailComponent
  }
]

@NgModule({
  declarations: [PropertyDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GalleryModule,
    LightboxModule
  ]
})
export class PropertyDetailModule { }
