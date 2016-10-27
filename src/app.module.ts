import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { WelcomeComponent } from './app/welcome/welcome.component.ts';
import { TitleComponent } from './app/welcome/title.component';
import { UserService } from './app/welcome/user.service';
import { ContactModule } from './app/contact/contact.module';
import { HighlightDirective } from './app/directives/highlight.directive';

@NgModule({
    imports: [
        BrowserModule,
        ContactModule
    ],
    declarations: [
        WelcomeComponent,
        HighlightDirective,
        TitleComponent
    ],
    providers: [ UserService ],
    bootstrap: [ WelcomeComponent ]
})
export class AppModule { }