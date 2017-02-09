import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <nav>
          <a routerLink="welcome" routerLinkActive="active">Welcome</a>
          <a routerLink="contact" routerLinkActive="active">Contact</a>
        </nav>

        <router-outlet></router-outlet>
    `
})
export class AppComponent { }
