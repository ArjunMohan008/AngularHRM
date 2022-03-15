import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbButtonModule
  ]
})
export class DashboardModule { }
