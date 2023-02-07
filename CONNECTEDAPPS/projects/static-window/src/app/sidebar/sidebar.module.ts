import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { SidebarNavigationModule, ToolbarModule } from 'shared-components';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    SidebarNavigationModule,
    UserModule
  ],
  exports:[
    ProjectsComponent
  ]
})
export class SidebarModule { }
