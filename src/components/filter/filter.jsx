import React from 'react';
import { Avatar, TextField, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/filter/selectors';
import { setFilter } from '../../redux/filter/filtersSlice';
import { selectContactsItems } from '../../redux/contacts/selectors';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { boxFilterStyle } from './styledFilter';
import { avatarStyle } from '../../pages/stylePages';

export const Filter = () => {
  const filters = useSelector(getFilter);

  const contacts = useSelector(selectContactsItems);

  const dispatch = useDispatch();

  const filterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box component="div" sx={boxFilterStyle}>
      <Avatar sx={avatarStyle}>
        <PersonSearchIcon />
      </Avatar>
      <TextField
        sx={{
          width: 324,
          bgcolor: 'trasnperent',
          backdropFilter: 'blur(2px)',
        }}
        margin="normal"
        type="text"
        value={filters}
        onChange={filterChange}
        disabled={contacts.length === 0}
      />
    </Box>
  );
};
