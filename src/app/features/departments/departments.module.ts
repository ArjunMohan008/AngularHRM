import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { AddEditDepartmentComponent } from './components/add-edit-department/add-edit-department.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [DepartmentsComponent, AddEditDepartmentComponent],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    CoreModule,
  ]
})
export class DepartmentsModule { }
