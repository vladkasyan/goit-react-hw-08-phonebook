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
        <ListItem key={contact.id} >
         <Typography sx={{border: '1px solid black',
        p: 1,
        borderRadius: 3}}>{contact.name + ' : ' + contact.number}</Typography> 

          {
            <ListItemButton
              type="button"
              name="delete"
              onClick={() => handleDelete(contact.id)}
              sx={{bgcolor: "#c2811f", borderRadius: 3, ml: 2,
            }}
            >
              delete
            </ListItemButton>
          }
        </ListItem>
      ))}
    </List>
  );
};
