import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact.routes'
import { AwesomePipe } from './awsome.pipe';
import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';
import { UserService } from '../welcome/user.service.ts';

@NgModule({
    imports: [ CommonModule, FormsModule, ContactRoutingModule ],
    declarations: [ ContactComponent, AwesomePipe ],
    exports: [ ContactComponent ],
    providers: [ ContactService ]
})
export class ContactModule { }