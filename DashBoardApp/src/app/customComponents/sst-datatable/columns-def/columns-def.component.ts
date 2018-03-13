import { Directive, QueryList, AfterViewInit, ContentChildren } from '@angular/core';
import { ColumnComponent } from './column/column.component';

@Directive({
    selector: 'columns-def',
})

export class ColumnsDefComponent implements AfterViewInit {
    @ContentChildren(ColumnComponent) public columnComponents: QueryList<ColumnComponent>;

    constructor() {
    }

    getColums() {
        let arrayColumns = new Array();
        this.columnComponents.toArray().forEach(item => {
            arrayColumns.push(item);
        });
        return arrayColumns;
    }

    ngAfterViewInit() {
    }

}
