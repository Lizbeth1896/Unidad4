import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { TransactionsMasterComponent } from './transactions/transactions-master/transactions-master.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'transactions',
    component: TransactionsMasterComponent
  }
//   {
//     path: '**',
//     component: NotFoundComponent
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }