import { configureStore } from '@reduxjs/toolkit';
import { ContactReducer } from './contacts/contactsSlice';
import { filtersReducer } from './filter/filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactReducer,
    filter: filtersReducer,
  },
});
