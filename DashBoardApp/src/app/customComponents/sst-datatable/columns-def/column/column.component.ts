import { Directive, OnInit, Input } from '@angular/core';

@Directive({
    selector: 'column',
})
export class ColumnComponent implements OnInit {

    ngOnInit(): void {
    }

    @Input() title: string;

    @Input() property: string;

    getName(): string {
        return this.title;
    }
    getProperty(): string {
        return this.property;
    }

    constructor() { }
}
