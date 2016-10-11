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
var centro_component_1 = require('./platform/components/centro/centro.component');
var menulist_component_1 = require('./platform/components/menu/menulist/menulist.component');
var menuitem_component_1 = require('./platform/components/menu/menuitem/menuitem.component');
var actionpanel_component_1 = require('./navigation/actionbar/actionpanel/actionpanel.component');
var notification_component_1 = require('./navigation/actionbar/notification/notification.component');
var profile_component_1 = require('./navigation/actionbar/profile/profile.component');
var app_component_1 = require('./app.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [app_component_1.AppComponent, centro_component_1.CentroComponent, menulist_component_1.MenuListComponent, menuitem_component_1.MenuItemComponent, actionpanel_component_1.ActionPanelComponent, notification_component_1.NotificationComponent, profile_component_1.ProfileComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map