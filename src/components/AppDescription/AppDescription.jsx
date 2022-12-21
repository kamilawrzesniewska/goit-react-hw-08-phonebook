import React from 'react';
import { Description } from './AppDescription.styled';

const AppDescription = () => {
  return (
    <Description>
    <h3>Welcome to Phonebook!</h3>
    <p>
    Phonebook allows you to save, delete and view your phone contacts at any time.
    </p>
    </Description>
  );
};

export default AppDescription;