import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { MaterialModule } from '../material';



@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports:[TabsComponent]
})
export class TabsModule { }
