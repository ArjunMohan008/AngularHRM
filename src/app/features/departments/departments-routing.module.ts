import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditDepartmentComponent } from './components/add-edit-department/add-edit-department.component';

import { DepartmentsComponent } from './departments.component';

const routes: Routes = [{ path: '', component: AddEditDepartmentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
