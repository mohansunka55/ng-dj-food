import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdertrackingComponent } from './ordertracking.component';

const routes: Routes = [{ path: '', component: OrdertrackingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdertrackingRoutingModule { }
