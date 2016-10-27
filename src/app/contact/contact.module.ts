import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AwesomePipe } from './awsome.pipe';
import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ ContactComponent, AwesomePipe ],
    exports: [ ContactComponent ],
    providers: [ ContactService ]
})
export class ContactModule { }