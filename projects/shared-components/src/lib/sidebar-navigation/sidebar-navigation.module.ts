import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { MaterialModule } from '../material';
import { NglModule } from 'ng-lightning';



@NgModule({
  declarations: [
    SidebarNavComponent
  ],
  imports: [
    CommonModule, 
    MaterialModule,
    NglModule
  ],
  exports:[
    SidebarNavComponent
  ]
})
export class SidebarNavigationModule { }
