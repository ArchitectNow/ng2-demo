"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var http_1 = require("@angular/http");
var router_deprecated_1 = require("@angular/router-deprecated");
var app_1 = require("./app");
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
    router_deprecated_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=boot.js.map