import { Component } from '@angular/core';
import ListComponent from './list/list.component';
import ProductHeadComponent from './head/head.component';

@Component({
    selector: 'product',
    directives: [ListComponent, ProductHeadComponent],
    template: `
    <product-head></product-head>
    <list></list>
    `
    //templateUrl : 'product.tpl'
})
export default class ProductComponent {}