import { Component, OnInit, Input, Output } from '@angular/core';
import { TableContainModel } from '../../../abstracts/table-contain-model';
import { SstDatatableService } from '../../../services/sst-datatable.service';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    myData: TableContainModel[];

    addTableItem: TableContainModel;
    idForDelete: number;
    editTableItem: TableContainModel;

    constructor(private sstDatatableService: SstDatatableService) {
        this.myData = [
            new TableContainModel(0,   "Bob0", "Borichev0" ),
            new TableContainModel(1,   "Bob1",  "Borichev1"),
            new TableContainModel(2,   "Bob2",   "Borichev2"),
            new TableContainModel(3,   "Bob3",   "Borichev3"),
            new TableContainModel(4,   "Bob4",  "Borichev4"),
            new TableContainModel(5,   "Bob5",  "Borichev5"),
            new TableContainModel(6,  "Bob6",   "Borichev6")


            //{ id: 0, firstName: "Bob0", lastName: "Borichev0" },
            //{ id: 1, firstName: "Bob1", lastName: "Borichev1" },
            //{ id: 2, firstName: "Bob2", lastName: "Borichev2" },
            //{ id: 3, firstName: "Bob3", lastName: "Borichev3" },
            //{ id: 4, firstName: "Bob4", lastName: "Borichev4" },
            //{ id: 5, firstName: "Bob5", lastName: "Borichev5" },
            //{ id: 6, firstName: "Bob6", lastName: "Borichev6" }
        ];

        this.addTableItem = new TableContainModel();
        this.editTableItem = new TableContainModel();
    }

    addItem(my_item: TableContainModel) {
        let item = new TableContainModel(my_item.id, my_item.firstName, my_item.lastName);

        if (isNullOrUndefined(item.id) || isNullOrUndefined(item.firstName) || isNullOrUndefined(item.lastName)) {
            alert("Can't add. All fields required");
            return;
        } 

        if (this.isIdUnique(item.id)) {
            this.myData.push(item);
            this.sstDatatableService.addElement();
        }
        else
            alert("Id " + item.id+ " isn't unique. Try add with another id");
    }

    deleteItem(id: number) {
        if (isNullOrUndefined(id))
        {
            alert("Entered id can't be empty");
            return;
        }

        for (var i = 0; i < this.myData.length; i++) {
            if (this.myData[i].id == id) {// === item.id && this.myData[i].firstName === item.firstName && this.myData[i].lastName === item.lastName) {
                console.log("Deleted item " + this.myData[i].toString());
                this.myData.splice(i, 1);
                this.sstDatatableService.deleteElement();
                return;
            }
        }

        alert("Needed item id="+id+" doesn't exist");
    }

    ngOnInit() {
    }

    editItem(item: TableContainModel) {
        alert(item.toString());
//        let myItem = new TableContainModel();
    }

    changeFirstName(id: number, firstName: string) {
       for (var i in this.myData) {
           if (this.myData[i].id == id) {
               this.myData[i].firstName = firstName;
               this.sstDatatableService.editElement();
               break; 
            }
        }
       alert("Can't find element with id="+id);
    }

    changelastName(id: number, lastName: string) {
        for (let i in this.myData) {
            if(this.myData[i].id === id) {
                this.myData[i].lastName = lastName;
                this.sstDatatableService.editElement();
                break; 
            }
        }
        alert("Can't find element with id=" + id);
    }

    isIdUnique(id: number): boolean {
        for (var i = 0; i < this.myData.length; i++)
            if (this.myData[i].id === id)
                return false;
        return true;
    }


}



