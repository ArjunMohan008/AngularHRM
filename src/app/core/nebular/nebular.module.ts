import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbMenuModule,
} from '@nebular/theme';

const mm = [
  CommonModule,
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbMenuModule,
];



@NgModule({
  declarations: [],
  imports: [
    ...mm
  ],
  exports: mm
})
export class NebularModule { }
