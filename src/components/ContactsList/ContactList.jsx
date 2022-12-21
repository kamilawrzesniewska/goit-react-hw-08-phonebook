import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/phonebook/operations';
import { useEffect } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();


  const isLoading = useSelector(state => state.isLoading)
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  )

  useEffect(() => {
  }, [contacts, filteredContacts])
  
  return (
    <>{isLoading && <b>Loading contacts...</b>}
      {contacts.length === 0 ? (
        <p>Add some contact to see them.</p>
      ) : (
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.phone}{' '}
              <button
                type="submit"
                onClick={() => dispatch(removeContact(contact.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactsList;