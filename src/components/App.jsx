import React from 'react';

import { Body, Placeholder } from './App.module';
import toast from 'react-hot-toast';
import { PhoneBook } from './phoneBook/phoneBook';
import { Contacts } from './contacts/contacts';
import { Filter } from './filter/filter';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/contacts/operations';
import Loader from './loader/loader';
import {
  selectError,
  selectContactsItems,
  selectIsLoading,
} from '../redux/contacts/selectors';
import { useEffect } from 'react';

export const App = () => {
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
    <Body>
      {isLoading && <Loader />}
      <PhoneBook />

      {!!contacts.length ? (
        <Filter />
      ) : (
        <Placeholder>Your phonebook is empty. Add first contact!</Placeholder>
      )}
      {isLoading || (!!contacts.length && <Contacts />)}
    </Body>
  );
};
