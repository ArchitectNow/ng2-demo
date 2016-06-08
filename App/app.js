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
var PeopleService_1 = require('./Services/PeopleService');
var AppComponent = (function () {
    function AppComponent(peopleService) {
        this.peopleService = peopleService;
    }
    AppComponent.prototype.searchPeople = function (searchBy) {
        var _this = this;
        this.peopleService.searchPeople(searchBy).subscribe(function (results) {
            _this.data = results;
        }, function (err) {
            alert(err);
        }, function () {
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [
                http_1.Http,
                http_1.HTTP_PROVIDERS,
                PeopleService_1.PeopleService
            ],
            templateUrl: '/app/app.html',
            styleUrls: ['/app/app.css']
        }), 
        __metadata('design:paramtypes', [PeopleService_1.PeopleService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map