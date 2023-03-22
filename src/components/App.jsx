import { FormContacts } from './FormContacts';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
import { GlobalStyle } from './GlobalStyles';
import { Container } from './Container';

import { useSelector, useDispatch } from 'react-redux';

import {
  addContact,
  deleteContact,
  filterContacts,
  getContactsValue,
  getFilterValue,
} from 'redux/contactSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contactsValue = useSelector(getContactsValue);
  const filterValue = useSelector(getFilterValue);

  const addNewContact = newContact => {
    if (
      contactsValue.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(newContact));
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const searchContacts = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  const getFilteredContacts = () => {
    return contactsValue.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  return (
    <Container>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <FormContacts onSave={addNewContact} />

      <h2>Contacts</h2>
      <Filter value={filterValue} onChange={searchContacts} />
      <Contacts contacts={getFilteredContacts()} onDelete={onDeleteContact} />
    </Container>
  );
};
