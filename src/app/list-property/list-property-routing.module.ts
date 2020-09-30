import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommercialComponent } from './commercial/commercial.component';
import { LandComponent } from './land/land.component';
import { ListPropertyComponent } from './list-property.component';
import { ResidentialComponent } from './residential/residential.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListPropertyComponent,
      },
      {
        path: 'residential',
        component: ResidentialComponent
      },
      {
        path: 'land',
        component: LandComponent
      },
      {
        path: 'commercial',
        component: CommercialComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPropertyRoutingModule { }
