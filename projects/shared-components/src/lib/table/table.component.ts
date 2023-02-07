import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableSettings } from './table.model';


export type ContentItemType = unknown;

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() columns!: string[];
  @Input() settings!: TableSettings;
  @Input() content!: ContentItemType[];
  displayedColumns!: string[];
  dataSource!: MatTableDataSource<ContentItemType>;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.content);
    this.displayedColumns=this.settings?.columns;
    if(this.settings?.actions){
      this.displayedColumns.push('tableActions')
    }
  }

}
