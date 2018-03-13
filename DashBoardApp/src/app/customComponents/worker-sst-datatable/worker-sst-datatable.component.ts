import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TableContainModel } from '../../abstracts/table-contain-model';
import { isNullOrUndefined } from 'util';

import { SstDatatableContext } from '../sst-datatable/sst-datatable-context';


@Component({
  selector: 'worker-sst-datatable',
  templateUrl: './worker-sst-datatable.component.html',
  styleUrls: ['./worker-sst-datatable.component.css']
})
export class WorkerSstDatatableComponent implements OnInit, AfterViewInit {

    ngAfterViewInit(): void {
       
    }

    myData: TableContainModel[];
    addTableItem: TableContainModel;
    idForDelete: number;
    editTableItem: TableContainModel;

    myDataTableContext: SstDatatableContext;

    constructor() {
        this.myData = [
            new TableContainModel(0, "Bob0", "Borichev0"),
            new TableContainModel(1, "Bob1", "Borichev1"),
            new TableContainModel(2, "Bob2", "Borichev2"),
            new TableContainModel(3, "Bob3", "Borichev3"),
            new TableContainModel(4, "Bob4", "Borichev4"),
            new TableContainModel(5, "Bob5", "Borichev5"),
            new TableContainModel(6, "Bob6", "Borichev6")
        ];
        this.addTableItem = new TableContainModel();
        this.editTableItem = new TableContainModel();
        this.myDataTableContext = new SstDatatableContext();
  
    }

    addItem(my_item: TableContainModel) {
        let item = new TableContainModel(my_item.id, my_item.firstName, my_item.lastName);

        if (!this.noNullOrUndefinedObject(item)) {
            alert("Can't add. All fields required");
            return;
        }
        if (this.isIdUnique(item.id)) {
            this.myData.push(item);

            this.myDataTableContext.refresh();
            this.myDataTableContext.invalidate();
        }
        else
            alert("Id " + item.id + " isn't unique. Try add with another id");
    }

    noNullOrUndefinedItems(item: TableContainModel): boolean {
        if (isNullOrUndefined(item.id) || isNullOrUndefined(item.firstName) || isNullOrUndefined(item.lastName))
            return false;
        return true;
    }

    noNullOrUndefinedObject(item: TableContainModel): boolean {
        return !isNullOrUndefined(item);
    }

    deleteItem(id: number) {
        if (isNullOrUndefined(id)) {
            alert("Entered id can't be empty");
            return;
        }
        for (var i = 0; i < this.myData.length; i++) {
            if (this.myData[i].id == id) {
                console.log("Deleted item " + this.myData[i].toString());
                this.myData.splice(i, 1);

                this.myDataTableContext.refresh();
                this.myDataTableContext.invalidate();

                return;
            }
        }
        alert("Needed item id=" + id + " doesn't exist");
    }

    ngOnInit() {
    }

    editItem(item: TableContainModel) {
        console.log(item);
        if (!this.noNullOrUndefinedObject(item)) {
            alert("Object for editing empty");
            return;
        }
        if (!this.noNullOrUndefinedItems(item)) {
            alert("All fields for editing must be");
        }
        this.changeItemByFixedId(item);
    }

    changeItemByFixedId(newItem: TableContainModel) {
        let find = false;
        for (var i in this.myData) {
            if (this.myData[i].id == newItem.id) {
                find = true;
                this.myData[i].firstName = newItem.firstName;
                this.myData[i].lastName = newItem.lastName;

                this.myDataTableContext.refresh();
                this.myDataTableContext.invalidate();
            }
        }
        if (!find)
            alert("Can't find element with id=" + newItem.id);
    }

    isIdUnique(id: number): boolean {
        for (var i = 0; i < this.myData.length; i++)
            if (this.myData[i].id === id)
                return false;
        return true;
    }

    getItemById(id: number): TableContainModel {
        for (var i = 0; i < this.myData.length; i++)
            if (this.myData[i].id === id)
                return this.myData[i];
        return null;
    }

}
