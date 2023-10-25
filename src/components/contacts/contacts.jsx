import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/filter/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { selectContactsItems } from '../../redux/contacts/selectors';
import { List, ListItem, ListItemButton, Typography } from '@mui/material';

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
        <ListItem key={contact.id} sx={boxListStyle}>
          {contact.name + ' : ' + contact.number}
        <ListItem key={contact.id} >

          
            <ListItemButton
              type="button"
              onClick={() => handleDelete(contact.id)}
              sx={{bgcolor: "#c2811f", borderRadius: 3, ml: 2,
            }}
            >
              delete
            </ListItemButton>
          
        </ListItem>
      ))}
    </List>
  );
};
