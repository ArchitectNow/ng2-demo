import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import {Headers, RequestOptions, URLSearchParams} from '@angular/http';

import {Person} from '../Models/Person';

@Injectable()
export class PeopleService {

    defaultOptions: RequestOptions = null;
    rootUrl: string = "/api/people";

    constructor(protected http: Http) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.defaultOptions = new RequestOptions({ headers: headers });
    }

    searchPeople(searchBy: string): Observable<Person[]> {

        return this.http.post(this.rootUrl + '/searchPeople?searchBy=' + searchBy, null, this.defaultOptions)
            .map(res => <Person[]>res.json());

    }

}