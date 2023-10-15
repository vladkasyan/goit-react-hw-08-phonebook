import { nanoid } from 'nanoid';
import { Forms, Label, Button, Input, Title } from './phoneBook.module';

import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { selectContactsItems } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';

export const PhoneBook = () => {
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

    event.target.reset();
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Forms onSubmit={submitForm}>
      <Toaster />
      <Title>Phonebook</Title>
      <Label htmlFor={nameId}>
        Name
        <Input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label htmlFor={numberId}>
        Number
        <Input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact </Button>
    </Forms>
  );
};
