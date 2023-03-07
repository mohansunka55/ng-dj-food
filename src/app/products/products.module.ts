import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {ProductService} from "../apiservices/product.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterProductsPipe} from "../filter-products.pipe";


@NgModule({
  declarations: [
    ProductsComponent,FilterProductsPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
    providers: [ProductService],
})
export class ProductsModule { }
