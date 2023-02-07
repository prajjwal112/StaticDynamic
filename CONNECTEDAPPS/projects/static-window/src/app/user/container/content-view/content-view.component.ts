import { Component, OnInit } from '@angular/core';
import { TableSettings } from 'shared-components';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss']
})
export class ContentViewComponent implements OnInit {
  displayedColumns!: string[];
  ELEMENT_DATA!: any[];
  settings!: TableSettings<string>;

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns=['userId', 'userName', 'logId', 'logPass', 'userProfileDesc', 'dbUserId', 'dbPass'];
    this.ELEMENT_DATA=[
          {userId: 1, userName: 'Hydrogen', logId: 1.0079, logPass: 'H', userProfileDesc: 'text', dbUserId: 'text', dbPass: 'text'},
          {userId: 2, userName: 'Hydrogen', logId: 1.0079, logPass: 'H', userProfileDesc: 'text', dbUserId: 'text', dbPass: 'text'},
          {userId: 3, userName: 'Hydrogen', logId: 1.0079, logPass: 'H', userProfileDesc: 'text', dbUserId: 'text', dbPass: 'text'},
          {userId: 4, userName: 'Hydrogen', logId: 1.0079, logPass: 'H', userProfileDesc: 'text', dbUserId: 'text', dbPass: 'text'},
          {userId: 5, userName: 'Hydrogen', logId: 1.0079, logPass: 'H', userProfileDesc: 'text', dbUserId: 'text', dbPass: 'text'},
        ];
        this.settings={
          columns: this.displayedColumns,
          actions: true
        }
  }

}
