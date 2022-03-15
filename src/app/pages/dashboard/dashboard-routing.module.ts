import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      // { path: '', redirectTo: '/home', pathMatch: 'full' },
      // { path: 'home', component: DashboardComponent },
      { path: 'departments', loadChildren: () => import('../../features/departments/departments.module').then(m => m.DepartmentsModule) },
      { path: 'employees', loadChildren: () => import('../../features/employees/employees.module').then(m => m.EmployeesModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
