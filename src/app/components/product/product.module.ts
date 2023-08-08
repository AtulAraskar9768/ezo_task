import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './list/list.component';
import { MaterialModule } from 'src/app/common-module/material.module';
import { SharedModule } from 'src/app/common-module/shared.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    SharedModule,
    ScrollingModule


  ]
})
export class ProductModule { }
