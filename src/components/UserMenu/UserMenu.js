import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className="navbar navbar-dark bg-dark sticky-top justify-content-center text-white align-items-baseline">
      <p> Welcome, {user.name}!</p>
      <button type="button" className="btn btn-outline-secondary" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};