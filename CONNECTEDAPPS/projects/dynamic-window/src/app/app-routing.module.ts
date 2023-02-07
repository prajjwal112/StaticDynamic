import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { OrdersModule } from './orders/orders.module';

const routes: Routes = [
  {
      path: '',
      component: MainPageComponent,
      pathMatch: 'full',
  },
  {
      path: 'orders',
      loadChildren: (): Promise<OrdersModule> =>
          import('./orders/orders.module').then(m => m.OrdersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
