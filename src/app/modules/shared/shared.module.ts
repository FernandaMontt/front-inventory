import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenaComponent } from './components/sidena/sidena.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenaComponent
  ],
  exports: [
    SidenaComponent
  ]
  ,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
