import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [SidenavComponent, FooterComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    SidenavComponent,
  ]
})
export class LayoutModule { }
