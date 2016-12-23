import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <navbar></navbar>
    <page-banner></page-banner>
    <div class="container">
      <blog-list></blog-list>
    </div>
  `
})
export class AppComponent { 
}
