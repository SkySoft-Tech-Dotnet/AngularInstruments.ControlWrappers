import { Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: 'column',
})
export class ColumnComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input()
  Title: string;

  @Input()
  Property: string;


  getName(): string {
    return this.Title;
  }
  getProperty(): string {
    return this.Property;
  }


  constructor() { }  
}
