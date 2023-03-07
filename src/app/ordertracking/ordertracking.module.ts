import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdertrackingRoutingModule } from './ordertracking-routing.module';
import { OrdertrackingComponent } from './ordertracking.component';


@NgModule({
  declarations: [
    OrdertrackingComponent
  ],
  imports: [
    CommonModule,
    OrdertrackingRoutingModule
  ]
})
export class OrdertrackingModule { }
