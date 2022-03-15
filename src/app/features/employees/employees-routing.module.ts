import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditemployeeComponent } from './components/add-editemployee/add-editemployee.component';

import { EmployeesComponent } from './employees.component';

const routes: Routes = [{ path: '', component: AddEditemployeeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
