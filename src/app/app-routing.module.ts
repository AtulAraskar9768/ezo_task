import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './common-component/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then((module) => module.DashboardModule) },
      { path: 'product', loadChildren: () => import('./components/product/product.module').then((module) => module.ProductModule) },
      { path: 'atm', loadChildren: () => import('./components/atm/atm.module').then((module) => module.AtmModule) },

    ]
  },
  { path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
