import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashDepositComponent } from './cash-deposit/cash-deposit.component';

const routes: Routes = [
  {path:'add-cash',component:CashDepositComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtmRoutingModule { }
