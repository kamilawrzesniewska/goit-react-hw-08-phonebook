import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WelcomeBack from 'components/WelcomeBack';

const Center = styled.div`
  position: relative;
  padding: 50px 25px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 2px 1px black;
  max-width: 400px;
  margin: 0 auto;
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

const Paragraph = styled.p`
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: orange;
`;

const HomePage = () => {
  const token = useSelector(state => state.token);

  return (
    <Center>
      <MainHeader>Phonebook</MainHeader>
      {!token && (
        <Paragraph>
          Welcome to my Phonebook App. Please <StyledLink to="/register">Sign up </StyledLink>or{' '}
          <StyledLink to="/login">Log in</StyledLink> to get started.
        </Paragraph>
      )}
      {token && <WelcomeBack />}
    </Center>
  );
};

export default HomePage;