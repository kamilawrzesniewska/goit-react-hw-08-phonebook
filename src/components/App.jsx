import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Suspense } from 'react';
import Loader from 'components/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Logout from './Logout';
import { useSelector } from 'react-redux';
import Cookie from './Cookie';

const StyledLink = styled(NavLink)`
  font-weight: bold;
  font-size: 30px;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 0;
  margin: 25px auto;
  background: white;
  max-width: 480px;
`;

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-40%, -50%);
`;

const App = () => {
  const token = useSelector(state => state.token);

  return (
    <>
      <Nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        {!token && <StyledLink to="/register">Sign up </StyledLink>}
        {!token && <StyledLink to="/login">Log in</StyledLink>}
        {token && <StyledLink to="/contacts">Contacts</StyledLink>}
        {token && <Logout />}
      </Nav>
      <Suspense
        fallback={
          <SpinnerWrapper>
            <Loader />
          </SpinnerWrapper>
        }
      >
        <Outlet />
      </Suspense>
      <Cookie />
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;
