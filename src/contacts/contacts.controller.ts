import { Controller, Get, Post, Body } from '@nestjs/common';
import { CONTACTS } from './mocks/contacts.mock';
import { Contact } from './models/contact.model';

@Controller('contacts')
export class ContactsController {
  public contacts: Contact[] = [];

  constructor() {
    this.contacts = [...CONTACTS];
  }

  @Get()
  public getContacts(): Contact[] {
    return this.contacts;
  }

  @Post()
  public createContact(@Body() newContact: Contact): object {
    this.contacts.push(newContact);
    return {
      result: 'This actions adds a new contact',
      contact: newContact,
    };
  }
}
