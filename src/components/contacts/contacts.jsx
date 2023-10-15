import React from 'react';
import { List, Listitem, Listbutton } from './contacts.module';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/filter/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { selectContactsItems } from '../../redux/contacts/selectors';

export const Contacts = () => {
  const contacts = useSelector(selectContactsItems);

  const filters = useSelector(getFilter);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  };
  const VisibleContacts = getVisibleContacts();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <List>
      {VisibleContacts.map(contact => (
        <Listitem key={contact.id}>
          {contact.name + ' : ' + contact.number}

          {
            <Listbutton
              type="button"
              name="delete"
              onClick={() => handleDelete(contact.id)}
            >
              delete
            </Listbutton>
          }
        </Listitem>
      ))}
    </List>
  );
};
