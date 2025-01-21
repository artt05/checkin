import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsPage } from './reports.page';

const routes: Routes = [
  {
    path: '',
    component: ReportsPage,
  },
  {
    path: 'user/:name',
    loadChildren: () =>
      import('../user-report/user-report.module').then(
        (m) => m.UserReportPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsPageRoutingModule {}
