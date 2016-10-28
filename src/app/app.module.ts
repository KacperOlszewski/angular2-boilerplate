import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component.ts';
import { AppRoutingModule } from './app.routes.ts';
import { WelcomeModule } from './welcome/welcome.module.ts';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        WelcomeModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }