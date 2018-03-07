import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { PersonModel } from '../abstracts/person-model';
import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
    private loginUrl = 'api/Login';

    constructor(private _http: Http) { }

    getLoginAnswer(person: PersonModel): Observable<any> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this._http.post(this.loginUrl, person, options)
            .map((response: Response) => {
                return response.text();
            });
    }

}
