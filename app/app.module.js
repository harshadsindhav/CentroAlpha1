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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var button_1 = require('@angular2-material/button');
//import { MdIconModule } from '@angular2-material/icon';
//import {MdIconRegistry} from '@angular2-material/icon';
var card_1 = require('@angular2-material/card');
//import { MdMenuModule} from '@angular2-material/menu';
var toolbar_1 = require('@angular2-material/toolbar');
var itemcard_component_1 = require('./components/itemcard/itemcard.component');
var imagecard_component_1 = require('./components/imagecard/imagecard.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, button_1.MdButtonModule, card_1.MdCardModule, toolbar_1.MdToolbarModule],
            declarations: [app_component_1.AppComponent, itemcard_component_1.ItemCardComponent, imagecard_component_1.ImageCardComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map