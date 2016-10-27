import { Injectable } from '@angular/core';

export class Contact {
    constructor(public id: number, public name: string) { }
}
const CONTACTS: Contact[] = [
    new Contact(21, 'Sam Spade'),
    new Contact(22, 'Nick Danger'),
    new Contact(23, 'Nancy Drew')
];

@Injectable()
export class ContactService {
    getContacts() {
        return new Promise<Contact[]>(resolve => {
            setTimeout(() => {
                resolve(CONTACTS);
            }, 400);
        });
    }
    getContact(id: number | string) {
        return this.getContacts()
            .then((heroes: Contact[]) => {
                heroes.find(hero => hero.id === +id)
            });
    }
}