import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OrderService, TableSettings } from 'shared-components';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Customer {
 id:string;
 customerNo: number;
 type: string;
 applicationId: string;
 series: string;
 workflow: string;
}

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss']
})
export class ContentViewComponent implements OnInit, OnChanges {
  @Input() menuItem!: any;
  displayedColumns!: string[];
  ELEMENT_DATA!: any[];
  settings!: TableSettings<string>;


  constructor(private readonly orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrderDetails(1).subscribe(data=>{
      const orderData= data[0];
      this.displayedColumns = Object.keys(orderData);
      this.settings={
        columns: this.displayedColumns,
        actions: true
      }
      this.ELEMENT_DATA=data;
    })
  }

  ngOnChanges(): void {
    if(this.menuItem){
    this.orderService.getOrderDetails(this.menuItem.id).subscribe(data=>{
      const orderData= data[0];
      this.displayedColumns = Object.keys(orderData);
      this.settings={
        columns: this.displayedColumns,
        actions: true
      }
      this.ELEMENT_DATA=data;
    })
    }
    // if(this.menuItem==='item1'){
    //   this.displayedColumns=['position', 'name', 'weight', 'symbol'];
    //   this.ELEMENT_DATA=[
    //     {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    //     {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    //     {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    //     {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    //     {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    //     {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    //     {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    //     {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    //     {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    //     {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    //   ]
    // }
    // else{
    //   this.displayedColumns=['id', 'customerNo', 'type', 'applicationId', 'series', 'workflow'];
    //   this.ELEMENT_DATA=[
    //     {id: '1', customerNo: 11234, type: 'Customer', applicationId: '01266', series: 'x', workflow: 'client'},
    //     {id: '2', customerNo: 133, type: 'Test', applicationId: '00001266', series: 'y', workflow: 'User'},
    //     {id: '3', customerNo: 1111, type: 'Test', applicationId: '6987', series: 'z', workflow: 'User'},
    //     {id: '4', customerNo: 1045, type: 'Customer', applicationId: '15789', series: 'x', workflow: 'Tenant'},
    //     {id: '5', customerNo: 11234, type: 'Customer', applicationId: '01266', series: 'x', workflow: 'client'},
    //     {id: '6', customerNo: 11234, type: 'Customer', applicationId: '01266', series: 'x', workflow: 'client'},
    //     {id: '7', customerNo: 11234, type: 'Customer', applicationId: '01266', series: 'x', workflow: 'client'},
    //   ]
    // }
  }

}
