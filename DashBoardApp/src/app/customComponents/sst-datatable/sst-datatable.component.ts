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

export class SstDataTableComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() data: TableContainModel[];
    @ContentChild(ColumnsDefComponent) columnsDefComponent: ColumnsDefComponent;
    subscription: Subscription;
    columns: Array<object>;
    node: ElementRef;
    myTable: any;

    constructor(private element: ElementRef, private sstDatatableService: SstDatatableService) {
        this.columns = new Array();
        this.node = element;
        this.myTable = {};

        this.subscription = this.sstDatatableService.getElement().subscribe(element => {
            this.myTable.clear();
            if (this.data && this.data.length != 0)
                for (var i = 0; i < this.data.length; i++)
                    this.myTable.row.add(this.data[i]);
            this.myTable.draw();
        });
    }

    ngAfterViewInit(): void {
        let arrTableContainModel = this.columnsDefComponent.getColums();
        for (let i = 0; i < arrTableContainModel.length; i++)
            this.columns.push({ title: arrTableContainModel[i].getName(), data: arrTableContainModel[i].getProperty() });
        this.initDatatable();
    }

    ngOnInit(): void {
        //$('tr').click(function () {
        //    $('.selected').removeClass('selected');
        //    $(this).addClass('selected');
        //});
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private initDatatable(): void {
        this.myTable = $(this.node.nativeElement).find('table').DataTable({
            data: this.data,
            columns: this.columns
        });
    }

}