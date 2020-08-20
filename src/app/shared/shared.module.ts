import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';



@NgModule({
  declarations: [
    CheckboxComponent, 
    RadioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CheckboxComponent,
    RadioComponent
  ]
})
export class SharedModule { }
