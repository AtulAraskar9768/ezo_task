import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtmRoutingModule } from './atm-routing.module';
import { CashDepositComponent } from './cash-deposit/cash-deposit.component';
import { SharedModule } from 'src/app/common-module/shared.module';


@NgModule({
  declarations: [
    CashDepositComponent
  ],
  imports: [
    CommonModule,
    AtmRoutingModule,
    SharedModule
  ]
})
export class AtmModule { }
