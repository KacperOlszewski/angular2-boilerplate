import { Component } from '@angular/core';
import ProductComponent from './product/product.component';

@Component({
    selector: 'app-root',
    directives: [ProductComponent],
    template: `
    <product></product>
    `
})
export class AppComponent {
    name: string = 'Szneba';
}