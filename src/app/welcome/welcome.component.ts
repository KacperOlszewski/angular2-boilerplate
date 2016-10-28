import { Component } from '@angular/core';

@Component({
    selector: 'app-welcome',
    template: `
    <app-title [subtitle]="subtitle"></app-title>
    `
})
export class WelcomeComponent {
    subtitle = '(v1)';
}