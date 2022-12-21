import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useDeleteContactMutation } from 'services/phonebookApi';

const List = styled.li`
  display: flex;
  &::before {
    content: '•';
    color: red;
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
`;

const Btn = styled.button`
  cursor: pointer;
  border: 2px solid #fff;
  outline: none;
  padding: 6px;
  border-radius: 10px;
  font-size: 1em;
  width: 30%;
  background: blue;
  color: #fff;
  &:hover {
    background: dodgerblue);
  }
`;

const ElementWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ContactList = ({ contacts }) => {
  const filter = useSelector(state => state.filter);
  const normalizedFilter = filter.toLowerCase().trim();

  const filteredContacts = useMemo(
    () =>
      contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
        .sort((a, b) => a.name.localeCompare(b.name)),
    [normalizedFilter, contacts]
  );

  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ElementWrapper key={'el' + id}>
          <List key={id}>
            <a href={`tel:${number}`}>
              {name} <br />
              {number}
            </a>
          </List>
          <Btn key={'btn' + id} onClick={() => deleteContact(id)}>
            Delete
          </Btn>
        </ElementWrapper>
      ))}
    </ul>
  );
};

export default ContactList;
