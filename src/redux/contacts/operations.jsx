import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://652442e6ea560a22a4e9a9c6.mockapi.io/';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkApi) => {
    try {
      const respone = await axios.get('/contacts');
      return respone.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkApi) => {
    try {
      const respone = await axios.post('/contacts', { name, number });
      return respone.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const respone = await axios.delete(`/contacts/${id}`);
      return respone.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
