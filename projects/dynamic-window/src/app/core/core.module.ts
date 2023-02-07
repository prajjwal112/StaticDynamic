import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryModule } from 'shared-components';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InMemoryModule
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
) {
    if (parentModule) {
        throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
}
 }
