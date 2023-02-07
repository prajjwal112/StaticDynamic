import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProjectManagementComponent } from './user-project-management/user-project-management.component';
import { UserProjectDataComponent } from './components/user-project-data/user-project-data.component';
import { AngularSplitModule } from 'angular-split';
import { MaterialModule, TableModule } from 'shared-components';
import { ContentViewComponent } from './container/content-view/content-view.component';
import { NglModule } from 'ng-lightning';



@NgModule({
  declarations: [
    UserProjectManagementComponent,
    UserProjectDataComponent,
    ContentViewComponent
  ],
  imports: [
    CommonModule,
    AngularSplitModule,
    MaterialModule,
    TableModule,
    NglModule
  ],
  exports:[
    UserProjectManagementComponent
  ]
})
export class UserModule { }
