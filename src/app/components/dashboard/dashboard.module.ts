import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from 'src/app/common-component/header/header.component';
import { MaterialModule } from 'src/app/common-module/material.module';
console.log("run dashboar module");

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
