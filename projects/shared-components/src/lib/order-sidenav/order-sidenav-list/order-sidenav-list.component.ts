import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderService } from '../../service';

@Component({
  selector: 'lib-order-sidenav-list',
  templateUrl: './order-sidenav-list.component.html',
  styleUrls: ['./order-sidenav-list.component.css']
})
export class OrderSidenavListComponent implements OnInit {
  @Output() itemClicked = new EventEmitter<any>();
  orders$!:Observable<any[]>;

  constructor(private readonly orderService: OrderService) { }

  onMenuClick(order:any):void{
    this.itemClicked.emit(order);
  }

  ngOnInit(): void {
    this.orders$=this.orderService.getOrders().pipe(
      map(orders=>orders.map(({id, orderNo})=> ({id, orderNo})))
    )
  }

}
