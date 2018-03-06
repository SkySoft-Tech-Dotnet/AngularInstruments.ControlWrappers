import * as $ from 'jquery';
import 'datatables.net'
import { Component, Input, OnInit, OnDestroy, AfterViewInit, QueryList, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { TableContainModel } from '../../abstracts/table-contain-model';
import { ColumnsDefComponent } from './columns-def/columns-def.component';
import { ColumnComponent } from './columns-def/column/column.component';

import { SstDatatableService } from '../../services/sst-datatable.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sst-datatable',
  templateUrl: './sst-datatable.component.html',
  styleUrls: ['./sst-datatable.component.css'],
  
})

export class SstDataTableComponent implements OnInit, AfterViewInit, OnDestroy{
 

  @Input() data: TableContainModel[];
  @ContentChild(ColumnsDefComponent) columnsDefComponent: ColumnsDefComponent;


  receivedElement: TableContainModel;
  subscription: Subscription;

  columns: Array<object>;
  node: ElementRef;
  myTable: any;
  //subscription: Subscription;

  constructor(private element: ElementRef, private sstDatatableService: SstDatatableService) {
     //this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
    this.columns = new Array(); 
    this.node = element;
    this.myTable = {};

    this.subscription = this.sstDatatableService.getElement().subscribe(element => {
        console.log("subscription " + (element as TableContainModel) );
        this.data.push(element as TableContainModel);
        console.log(this.data);
        //this.myTable.ajax.reload();
        this.myTable.draw();
    });

  }

  ngAfterViewInit(): void {
    let arrTableContainModel = this.columnsDefComponent.getColums();
    for (let i = 0; i < arrTableContainModel.length; i++)
      this.columns.push({ title: arrTableContainModel[i].getName(), data: arrTableContainModel[i].getProperty() });
    console.log(this.columns);
    this.initDatatable();

    
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
     // this.subscription.unsubscribe();
  }

  private initDatatable(): void {
    this.myTable = $(this.node.nativeElement).find('table').DataTable({
      data: this.data,
      columns: this.columns
    });
  }

}




/*

  ngOnInit() {
    let arrayProperties = Object.keys(this.MyData[0]);

    for (let i = 0; i < arrayProperties.length; i++) {
      this.columns.push({ title: arrayProperties[i].toUpperCase(), data: arrayProperties[i] });
    }
    this.initDatatable();
  }


  ngAfterViewInit() {
  }



*/


//this.myData = [
//  { id: 0, firstName: "Bob1", lastName: "Borichev1" },
//  { id: 1, firstName: "Bob2", lastName: "Borichev2" },
//  { id: 2, firstName: "Bob3", lastName: "Borichev3" },
//  { id: 4, firstName: "Bob4", lastName: "Borichev4" },
//  { id: 3, firstName: "Bob5", lastName: "Borichev5" },
//  { id: 5, firstName: "Bob6", lastName: "Borichev6" },
//  { id: 6, firstName: "Bob7", lastName: "Borichev7" }
//];
