import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WelcomeBack from 'components/WelcomeBack';

const Center = styled.div`
  position: relative;
  
`;

const MainHeader = styled.h1`
  font-size: 2em;
  
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
          Welcome! Please <StyledLink to="/register">Sign up </StyledLink>or{' '}
          <StyledLink to="/login">Log in</StyledLink>
        </Paragraph>
      )}
      {token && <WelcomeBack />}
    </Center>
  );
};

export default HomePage;
