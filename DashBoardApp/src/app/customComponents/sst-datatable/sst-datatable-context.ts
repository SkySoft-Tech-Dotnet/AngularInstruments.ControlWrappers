import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import { SstDatatableContextTasks } from './sst-datatable-context-tasks.enum';
     
export class SstDatatableContext {
    private subject: Subject<SstDatatableContextTasks>;
    
    constructor() {
        this.subject = new Subject<SstDatatableContextTasks>();
    }

    refresh() {
        this.subject.next(SstDatatableContextTasks.Refresh);
    }

    reload() {
        this.subject.next(SstDatatableContextTasks.Reload);
    }

    invalidate() {
        this.subject.next(SstDatatableContextTasks.Invalidate);
    }

    getContext(): Observable<SstDatatableContextTasks> {
        return this.subject.asObservable();
    }
}