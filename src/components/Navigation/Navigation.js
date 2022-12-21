import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { UserMenu } from 'components/UserMenu/UserMenu';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav as="ul" className="navbar navbar-dark bg-dark sticky-top justify-content-center">
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div class="nav justify-content-between">
          <NavLink as="li" to="/login" className="nav-link text-white">
            Login
          </NavLink>{' '}
          <NavLink to="/register" as="li" className="nav-link text-white">
            {' '}
            Register
          </NavLink>
        </div>
      )}
    </Nav>
  );
};