import { Component } from '@angular/core';
import NodeComponent from '../node/node.component';

@Component({
    selector: 'list',
    directives: [NodeComponent],
    template: `
    <node></node>
    <node></node>
    <node></node>
    `
})
export default class ListComponent {


}