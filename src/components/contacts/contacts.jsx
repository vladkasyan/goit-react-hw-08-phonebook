import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/filter/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { selectContactsItems } from '../../redux/contacts/selectors';
import { List, ListItem, ListItemButton } from '@mui/material';

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
        <ListItem key={contact.id}>
          {contact.name + ' : ' + contact.number}

          {
            <ListItemButton
              type="button"
              name="delete"
              onClick={() => handleDelete(contact.id)}
            >
              delete
            </ListItemButton>
          }
        </ListItem>
      ))}
    </List>
  );
};
