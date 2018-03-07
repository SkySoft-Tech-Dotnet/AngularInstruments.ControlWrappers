import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { PersonModel } from '../abstracts/person-model';
import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DashboardService {
    private loginUrl = 'api/Login';

    constructor(private _http: Http) { }

    getLoginedUser(): Observable<any> {
        return this._http.get(this.loginUrl)
            .map(res => {
                return res.json() as PersonModel;
            });
    }
}
