import React from 'react';
import { useSignupMutation } from 'services/phonebookApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { addToken } from '../../redux/Actions';
import { RegistrationForm } from './Registration.styled';

const Registration = () => {
  const [signup] = useSignupMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async e => {
    e.preventDefault();
    const form = e.target;
    const {
        name: { value: name },
        email: { value: email },
        password: { value: password },
        } = form;

    const credentials = { name, email, password };
    await signup(credentials)
      .unwrap()
      .then(({ token }) => {
        Cookies.set('token', token);
      })
      .catch(() => {
        toast.warn('User with this email address already exists');
      });

    const token = await Cookies.get('token');
    if (token === undefined) {
      return;
    }

    await dispatch(addToken(token));
    await navigate('/contacts');
    form.reset();
  };

  return (
    <>
      <RegistrationForm>
        <h2>Registration</h2>
        <form onSubmit={submitHandler}>
          <div>
            <label>
              Name
            <input
                type="text"
                name="name"
                title="Please enter your name"
                required
                placeholder=" " />
            </label>
          </div>
          <div>
            <label>
              E-mail
            <input
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                type="password"
                name="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one uppercase and lowercase letter, one number and at least 8 or more characters"
                autoComplete="new-password"
                required
              />
            </label>
          </div>
          <button type="submit">Sign up</button>
        </form>
      </RegistrationForm>
    </>
  );
};

export default Registration;