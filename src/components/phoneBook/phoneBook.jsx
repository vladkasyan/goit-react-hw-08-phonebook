import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { selectContactsItems } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { Avatar, Button, TextField, Box, Typography } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import { avatarStyle } from '../../pages/stylePages';
import { useEffect, useState } from 'react';
import { LoadAdd } from '../loader/loader';

export const PhoneBook = () => {
  const [add, setAdd] = useState('');
  const contacts = useSelector(selectContactsItems);

  const dispatch = useDispatch();

  const toastOptions = {
    duration: 2000,
    position: 'top-right',
  };

  const checkDublicate = name => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`${name} is already in contacts`, toastOptions);

      return true;
    }
  };

  useEffect(() => {
    setAdd(false);
  }, [contacts]);

  const submitForm = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;

    if (checkDublicate(name.value)) return;

    dispatch(addContact({ name: name.value, number: number.value })).then(
      toast.success(
        `${name.value} has succesfully added to your phonebook`,
        toastOptions
      )
    );
    setAdd(true);
    event.target.reset();
  };

  return (
    <>
      <Avatar sx={avatarStyle}>
        <ContactsIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={{color: '#e6b367'}}>
        Add Contact
      </Typography>
      <Box component="form" onSubmit={submitForm} sx={{ mt: 1 }}>
        <Toaster />

        <TextField
          sx={{ backgroundColor: 'trasnperent' }}
          label="Name"
          margin="normal"
          fullWidth
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <TextField
          sx={{ backgroundColor: 'trasnperent'  }}
          label="Number"
          margin="normal"
          fullWidth
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        {add && <LoadAdd />}
        <Button type="submit">Add contact </Button>
      </Box>
    </>
  );
};
