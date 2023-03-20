import { useEffect, useState } from 'react';
import { FormContacts } from './FormContacts';
import { Contacts } from './Contacts';
import { Filter } from './Filter';

import { GlobalStyle } from './GlobalStyles';
import { Container } from './Container';

const getInitialConatcts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parcedContacts = JSON.parse(savedContacts);
    return parcedContacts;
  }
  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialConatcts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, newContact]);
  };

  const onDeleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  const searchContacts = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <FormContacts onSave={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={searchContacts} />
      <Contacts contacts={getFilteredContacts()} onDelete={onDeleteContact} />
    </Container>
  );
};
