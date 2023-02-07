import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrderSidenavModule, TableModule } from 'shared-components';
import { ContentViewComponent } from './container/content-view/content-view.component';
import { OrdersRoutingModule } from './orders.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OrdersListEffects } from './state/orders-list/orders-list.effects';
import { reducers } from './state/orders.state';



@NgModule({
  declarations: [
    OrdersComponent,
    ContentViewComponent
  ],
  imports: [
    CommonModule,
    OrderSidenavModule,
    TableModule,
    OrdersRoutingModule,
    
    StoreModule.forFeature('orders', reducers),
    EffectsModule.forFeature([OrdersListEffects]),
  ]
})
export class OrdersModule { }
