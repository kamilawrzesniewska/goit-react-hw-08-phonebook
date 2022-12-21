import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const form = e.target.form;
    e.preventDefault();
    const { name, email, password } = e.target;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="d-flex flex-column mb-3"

    >
      <label className="form-label">Username </label>
      <input type="text" name="name" className="form-control" placeholder="Username"/>

      <label className="form-label">Email </label>
      <input type="email" name="email" className="form-control" placeholder="Email"/>

      <label className="form-label">Password </label>
      <input type="password" name="password" className="form-control" placeholder="Password"/>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};