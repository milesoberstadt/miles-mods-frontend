import { Component } from '@angular/core';

@Component({
    selector: "navbar",
    templateUrl: "app/navbar.component.html",
    styles: [`
        nav{
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        }
    `]
})

export class NavbarComponent{

}