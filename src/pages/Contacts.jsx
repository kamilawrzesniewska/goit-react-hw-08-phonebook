import ContactForm from '../components/ContactForm';
import FilteredUsers from '../components/FilteredUsers';
import ContactList from '../components/ContactList';
import styled from 'styled-components';
import { useGetContactsQuery } from 'services/phonebookApi';
import Notification from '../components/Notification';
import isEmpty from 'utilities/isEmpty';
import Loader from '../components/Loader';

const Center = styled.div`
  max-width: 400px;
  margin: 0 auto 25px auto;
  position: relative;
  padding: 50px 25px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 2px 1px orange;
`;

const MainHeader = styled.h1`
  font-size: 2em;
  
  padding: 10px;
  color: #000;
  letter-spacing: 5px;
  margin-bottom: 60px;
  font-weight: bold;
  padding-left: 10px;
`;

const SecondHeader = styled.h2`
  font-size: 1.5em;
 
  padding: 10px;
  color: #000;
  letter-spacing: 5px;
  margin-bottom: 60px;
  font-weight: bold;
  padding-left: 10px;
`;
const SpinnerWrapper = styled.div`
  margin: 10px 0 0 100px;
`;

const Contacts = () => {
  const {
    data: contacts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetContactsQuery();

  let content;

  if (isLoading) {
    content = (
      <SpinnerWrapper>
        <Loader />
      </SpinnerWrapper>
    );
  } else if (isSuccess && !isEmpty(contacts)) {
    content = <ContactList contacts={contacts} />;
  } else if (isSuccess && isEmpty(contacts)) {
    content = <Notification />;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <>
      <Center>
        <MainHeader>Phonebook</MainHeader>
        <ContactForm contacts={contacts} />
        <SecondHeader>Contacts</SecondHeader>
        <FilteredUsers />
        {content}
      </Center>
    </>
  );
};

export default Contacts;