import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './flex.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FlexComponent],
  declarations: [FlexComponent]
})
export class FlexModule { }
