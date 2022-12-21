import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';

function Contacts() {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  )
}

export default Contacts;