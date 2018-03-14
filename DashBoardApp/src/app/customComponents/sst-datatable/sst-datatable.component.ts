import * as $ from 'jquery';
import 'datatables.net'

import { Component, Input, OnInit, OnDestroy, AfterViewInit, QueryList, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { TableContainModel } from '../../abstracts/table-contain-model';
import { ColumnsDefComponent } from './columns-def/columns-def.component';
import { ColumnComponent } from './columns-def/column/column.component';
import { Subscription } from 'rxjs/Subscription';
import { SstDatatableContext } from './sst-datatable-context';
import { SstDatatableContextTasks } from '../sst-datatable/sst-datatable-context-tasks.enum';

@Component({
    selector: 'sst-datatable',
    templateUrl: './sst-datatable.component.html',
    styleUrls: ['./sst-datatable.component.css']
})
export class SstDataTableComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() data: TableContainModel[];
    @Input() dataTableContext: SstDatatableContext;
    @ContentChild(ColumnsDefComponent) columnsDefComponent: ColumnsDefComponent;

    columns: Array<object>;
    node: ElementRef;
    myTable: any;
    subscription: Subscription;

    constructor(private element: ElementRef) {
        this.columns = new Array();
        this.node = element;
        this.myTable = {};
    }

    private initDatatable(): void {
        this.myTable = $(this.node.nativeElement).find('table').DataTable({
            data: this.data,
            columns: this.columns,
            //rowReorder: true
        });
    }

    ngAfterViewInit(): void {
        let arrTableContainModel = this.columnsDefComponent.getColums();
        for (let i = 0; i < arrTableContainModel.length; i++)
            this.columns.push({
                title: arrTableContainModel[i].getName(),
                data: arrTableContainModel[i].getProperty()
             });
        this.initDatatable();
    }

    ngOnInit(): void {
        this.subscription = this.dataTableContext.getContext().subscribe(
            context => {
                if (context == SstDatatableContextTasks.Refresh) {
                    this.myTable.clear();
                    if (this.data && this.data.length != 0)
                        for (var i = 0; i < this.data.length; i++)
                            this.myTable.row.add(this.data[i]); 
                    console.log("refresh");
                }
                if (context == SstDatatableContextTasks.Invalidate) {
                    this.myTable.draw();
                    console.log("draw");
                }
                if (context == SstDatatableContextTasks.Reload) {
                    this.myTable.reload();
                    console.log("reload");
                }
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}