import { Component, OnInit, Input, Output } from '@angular/core';

import { TableContainModel } from '../../../abstracts/table-contain-model';
import { Subject } from 'rxjs/Subject';

import { SstDatatableService } from '../../../services/sst-datatable.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  myData: TableContainModel[];

  constructor(private sstDatatableService: SstDatatableService) {
    this.myData = [
      { id: 0, firstName: "Bob1", lastName: "Borichev1" },
      { id: 1, firstName: "Bob2", lastName: "Borichev2" },
      { id: 2, firstName: "Bob3", lastName: "Borichev3" },
      { id: 4, firstName: "Bob4", lastName: "Borichev4" },
      { id: 3, firstName: "Bob5", lastName: "Borichev5" },
      { id: 5, firstName: "Bob6", lastName: "Borichev6" },
      { id: 6, firstName: "Bob7", lastName: "Borichev7" }
    ];

  }

  addItem(item: TableContainModel) {
    //  this.myData.push(item);
      this.sstDatatableService.addElement(item);

  }

  ngOnInit() {
   
  }

}
