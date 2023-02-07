import { Component, OnInit } from '@angular/core';
import { OrderService } from 'shared-components';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private readonly os: OrderService){}

  ngOnInit(): void {
    // this.os.getProducts().subscribe(p=> console.log(p))
    // this.os.getProduct(1).subscribe(p=> console.log(p))
    // this.os.getElements().subscribe(e=> console.log(e))
     this.os.getOrders().subscribe(e=> console.log(e))
  }

  title = 'dynamicWindow';
  menuItem!: any;

  onItemClick(order:any):void{
    this.menuItem=order;
  }

}
