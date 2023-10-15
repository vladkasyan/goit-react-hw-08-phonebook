import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.isLoading = false;
      state.error = null;
    },
    [getContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [getContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
  },
});

export const ContactReducer = contactsSlice.reducer;
