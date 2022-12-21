import { React, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './App.styled';
import MainPage from 'components/MainPage/MainPage';
import Loader from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CookieConfirmation from 'components/CookieConfirmation/CookieConfirmation';



const App = () => {
  return (
    <>
      <Wrapper>
        <MainPage />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
      </Wrapper>
      <CookieConfirmation />
      <ToastContainer autoClose={3000} position = 'top-right'/>
    </>
    )
};

export default App;