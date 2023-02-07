import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'lib-order-sidenav',
  templateUrl: './order-sidenav.component.html',
  styleUrls: ['./order-sidenav.component.scss']
})
export class OrderSidenavComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  @Output() itemClicked = new EventEmitter<any>();
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  onMouseEnter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  onMouseLeave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  // onItemClick(item:any):void{
  //   this.itemClicked.emit(item);
  // }

}
