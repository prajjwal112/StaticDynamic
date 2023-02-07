import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material';
import { NglModule } from 'ng-lightning';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NglModule
  ],
  exports:[
    ToolbarComponent
  ]
})
export class ToolbarModule { }
