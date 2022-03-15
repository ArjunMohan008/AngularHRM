import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditDepartmentComponent } from './components/add-edit-department/add-edit-department.component';
import { ListDepartmentsComponent } from './components/list-departments/list-departments.component';
import { DepartmentsComponent } from './departments.component';

const routes: Routes = [
  { path: '', component: ListDepartmentsComponent},
  { path: 'add', component: AddEditDepartmentComponent},
  { path: 'edit/:id', component: AddEditDepartmentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
