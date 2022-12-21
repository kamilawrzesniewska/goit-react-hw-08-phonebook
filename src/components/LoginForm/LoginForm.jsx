import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const {email, password} = form.elements
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="d-flex flex-column mb-3">
      <label className="p-2 d-flex justify-content-center">
        <input type="email" name="email"  className="form-control" placeholder="Email"/>
      </label>
      <label className="p-2 d-flex justify-content-center">
        <input type="password" name="password" className="form-control" placeholder="Password" />
      </label>
      <button type="submit" className="btn btn-primary">Log In</button>
    </form>
  );
};