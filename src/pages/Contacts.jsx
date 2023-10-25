import toast from 'react-hot-toast';
import { PhoneBook } from '../components/phoneBook/phoneBook';
import { Contacts } from '../components/contacts/contacts';
import { Filter } from '../components/filter/filter';
import { useDispatch, useSelector } from 'react-redux';
import hero from '../components/images/hero.jpg';
import { getContacts } from '../redux/contacts/operations';
import { Loader } from '../components/loader/loader';
import {
  selectError,
  selectContactsItems,
  selectIsLoading,
} from '../redux/contacts/selectors';
import { useEffect } from 'react';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import { boxStyle, containerContactsStyle } from './stylePages';

export default function Contactss() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContactsItems);

  const isLoading = useSelector(selectIsLoading);

  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error === 'ERR_BAD_REQUEST') {
      toast.error('There are some problems! Try again later.');
      return;
    }
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Container component="main" maxWidth="md" sx={containerContactsStyle(hero)}>
      <CssBaseline />
      {isLoading && <Loader />}
      <PhoneBook />
      {!!contacts.length ? (
        <Filter />
      ) : (
        <Box sx={boxStyle}>
          <Typography component="h1" variant="h5" sx={{ color: '#785118' }}>
            You don't have any contacts yet
          </Typography>
        </Box>
      )}
      {isLoading || (!!contacts.length && <Contacts />)}
    </Container>
  );
}
