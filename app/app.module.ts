import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CentroComponent } from './platform/components/centro/centro.component';
import { MenuListComponent } from './platform/components/menu/menulist/menulist.component'; 
import { MenuItemComponent } from './platform/components/menu/menuitem/menuitem.component';  
import { ActionPanelComponent } from './navigation/actionbar/actionpanel/actionpanel.component';
import { NotificationComponent } from './navigation/actionbar/notification/notification.component';
import { ProfileComponent } from './navigation/actionbar/profile/profile.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule],
  declarations: [ AppComponent, CentroComponent, MenuListComponent, MenuItemComponent, ActionPanelComponent, NotificationComponent, ProfileComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
