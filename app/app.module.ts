import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MdButtonModule } from '@angular2-material/button';
//import { MdIconModule } from '@angular2-material/icon';
import { MdCardModule } from '@angular2-material/card';
//import {MdIconRegistry} from '@angular2-material/icon';

@NgModule({
  imports: [ BrowserModule, MdButtonModule, MdCardModule],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers : []
})
export class AppModule { }
