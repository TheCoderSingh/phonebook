import { Injectable } from '@angular/core';

interface IContact {
  name: string;
  number: string;
}

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts() {
    let contacts: IContact[] = [
    {
      name: 'Janez',
      number: '32432431231'
    },
    {
      name: 'John',
      number: '53657243424'
    },
    {
      name: 'Mary',
      number: '21432536634'
    },
    {
      name: 'Jasmine',
      number: '72389478327'
    }
    ];
    return contacts;
  }

}
