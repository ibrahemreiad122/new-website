import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazythreeRoutingModule } from './lazythree-routing.module';
import { NexterComponent } from '../nexter/nexter.component';


@NgModule({
  declarations: [
    NexterComponent
  ],
  imports: [
    CommonModule,
    LazythreeRoutingModule
  ]
})
export class LazythreeModule { }
