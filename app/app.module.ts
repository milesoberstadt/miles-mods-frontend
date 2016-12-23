import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { NavbarComponent } from './navbar.component';
import { PageBanner } from './page-banner.component';
import { BlogList } from './blog-list.component';
import { BlogService } from './blog.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, NavbarComponent, PageBanner, BlogList ],
  bootstrap:    [ AppComponent ],
  providers: [ BlogService ]
})
export class AppModule { }
