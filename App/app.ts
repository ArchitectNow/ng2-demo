import {Component} from '@angular/core';
import {
    ROUTER_DIRECTIVES,
    RouteConfig,
} from '@angular/router-deprecated';
import {Http, HTTP_PROVIDERS} from '@angular/http';

import {PeopleService} from './Services/PeopleService';
import {Person} from './Models/Person';


@Component({
    selector: 'my-app',
    providers: [
        Http,
        HTTP_PROVIDERS,
        PeopleService
    ],
    templateUrl: '/app/app.html',
    styleUrls: ['/app/app.css']
})
export class AppComponent {

    data: Person[];

    constructor(private peopleService: PeopleService) {
       

    }

    searchPeople(searchBy: string) {
        this.peopleService.searchPeople(searchBy).subscribe(
            results => {
                this.data = results;
            },
            err => {
                alert(err);
            },
            () => {

            });
    }

}
