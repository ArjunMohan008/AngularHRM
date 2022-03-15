import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { AddEditemployeeComponent } from './components/add-editemployee/add-editemployee.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [EmployeesComponent, AddEditemployeeComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    CoreModule
  ]
})
export class EmployeesModule { }
