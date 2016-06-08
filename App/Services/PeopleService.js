"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var http_2 = require('@angular/http');
var PeopleService = (function () {
    function PeopleService(http) {
        this.http = http;
        this.defaultOptions = null;
        this.rootUrl = "/api/people";
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.defaultOptions = new http_2.RequestOptions({ headers: headers });
    }
    PeopleService.prototype.searchPeople = function (searchBy) {
        return this.http.post(this.rootUrl + '/searchPeople?searchBy=' + searchBy, null, this.defaultOptions)
            .map(function (res) { return res.json(); });
    };
    PeopleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PeopleService);
    return PeopleService;
}());
exports.PeopleService = PeopleService;
//# sourceMappingURL=PeopleService.js.map