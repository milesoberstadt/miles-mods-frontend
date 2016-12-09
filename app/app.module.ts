import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar.component';
import { PageBanner } from './page-banner.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NavbarComponent, PageBanner ],
  bootstrap:    [ AppComponent ],
  providers: [ ]
})
export class AppModule { }
