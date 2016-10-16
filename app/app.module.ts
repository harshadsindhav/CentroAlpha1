import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MdButtonModule } from '@angular2-material/button';
//import { MdIconModule } from '@angular2-material/icon';
//import {MdIconRegistry} from '@angular2-material/icon';
import { MdCardModule } from '@angular2-material/card';
//import { MdMenuModule} from '@angular2-material/menu';
import {MdToolbarModule } from '@angular2-material/toolbar';

import { ItemCardComponent } from './components/itemcard/itemcard.component';
import { ImageCardComponent } from './components/imagecard/imagecard.component';

@NgModule({
  imports: [ BrowserModule, MdButtonModule, MdCardModule, MdToolbarModule],
  declarations: [ AppComponent , ItemCardComponent, ImageCardComponent],
  bootstrap: [ AppComponent ],
  providers : [  ]
})
export class AppModule { }
