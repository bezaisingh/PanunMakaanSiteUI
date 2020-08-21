import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyDetailComponent } from './property-detail.component';
import { Routes, RouterModule } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class PropertyDetailModule { }
