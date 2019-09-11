import { Test, TestingModule } from '@nestjs/testing';
import { ContactsController } from './contacts.controller';
import { Contact } from './models/contact.model';
import * as faker from 'faker';

describe('Contacts Controller', () => {
  let controller: ContactsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactsController],
    }).compile();

    controller = module.get<ContactsController>(ContactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('root', () => {
    describe('get', () => {
      it('should return contacts mock data', () => {
        expect(controller.getContacts()).toBe(controller.contacts);
      });
    });
    describe('post', () => {
      it('should return mock contacts with the new contact to create', () => {
        const newContact: Contact = {
          id: faker.random.number(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
        };

        expect(controller.createContact(newContact)).toEqual({
          result: 'This actions adds a new contact',
          contact: newContact,
        });
      });
    });
  });
});
