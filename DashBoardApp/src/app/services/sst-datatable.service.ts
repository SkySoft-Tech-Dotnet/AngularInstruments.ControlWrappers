import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import { TableContainModel } from '../abstracts/table-contain-model';

@Injectable()
export class SstDatatableService {
    private subject = new Subject<TableContainModel>();
    constructor() {
    }

    addElement() {
        this.subject.next();
    }

    deleteElement() {
        this.subject.next();
    }

    editElement() {
        this.subject.next();
    }

    getElement(): Observable<TableContainModel> {
        return this.subject.asObservable();
    }
}
