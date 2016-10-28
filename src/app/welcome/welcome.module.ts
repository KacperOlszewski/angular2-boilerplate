import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome.routes';
import { WelcomeComponent }   from './welcome.component';
import { HighlightDirective }   from '../directives/highlight.directive';
import { TitleComponent }   from './title.component';
import { UserService }   from './user.service';

@NgModule({
    imports: [
        CommonModule,
        WelcomeRoutingModule
    ],
    declarations: [
        WelcomeComponent,
        HighlightDirective,
        TitleComponent
    ],
    providers: [ UserService ]
})
export class WelcomeModule { }
