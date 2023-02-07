import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSidenavComponent } from './order-sidenav.component';
import { MaterialModule } from '../material';
import { TabsModule } from '../tabs';
import { OrderSidenavListComponent } from './order-sidenav-list/order-sidenav-list.component';



@NgModule({
  declarations: [
    OrderSidenavComponent,
    OrderSidenavListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TabsModule
  ],
  exports:[
    OrderSidenavComponent
  ]
})
export class OrderSidenavModule { }
