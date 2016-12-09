import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ]
})
export class AppModule { }
