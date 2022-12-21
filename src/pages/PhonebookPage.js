import { Adder } from 'components/Adder/Adder';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export default function PhonebookPage() {
  return (
    <>
      <h1 className="nav text-white justify-content-center">Phonebook</h1>
      <Adder />
      <Filter/>
      <ContactsList />
    </>
  );
};