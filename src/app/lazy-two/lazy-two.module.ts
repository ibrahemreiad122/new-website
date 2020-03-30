import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyTwoRoutingModule } from './lazy-two-routing.module';
import { HotelComponent } from '../hotel/hotel.component';


@NgModule({
  declarations: [
    HotelComponent
  ],
  imports: [
    CommonModule,
    LazyTwoRoutingModule
  ]
})
export class LazyTwoModule { }
