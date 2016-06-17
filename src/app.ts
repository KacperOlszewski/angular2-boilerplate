import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'rxjs/Rx';

import "bootstrap-sass/assets/stylesheets/_bootstrap.scss";
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
//import {enableProdMode} from '@angular/core';

//enableProdMode();
bootstrap(AppComponent);