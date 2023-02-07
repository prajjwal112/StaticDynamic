import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent  {

  //variant = 'scoped';
  id = 0;
  selectedTab: any = 'sum';
  details: number[] = [];

  change() {
   // this.variant = this.variant === 'scoped' ? 'scoped' : 'scoped';
  }

  addDetail() {
    this.details.push(this.id++);
  }

  isDisabled() {
    return this.selectedTab === 'sum' || this.selectedTab.id === 'sum';
  }

   tabChange(detail: number, event: string) {
    console.log('detail', detail, event);
  }

   removeDetail(detail: Object) {
    this.details = this.details.filter((d) => d !== detail);
    this.selectedTab = 'sum';
  }

}
