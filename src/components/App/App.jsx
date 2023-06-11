import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from '../GlobalStyle';
import { AppStyle } from './App.styled';

import { fetchCurrentUser } from 'redux/auth/authOperations';

import Layout from 'components/Layout/Layout';

import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

import NotFound from 'pages/NotFound/NotFound';

const Home = lazy(() => import('../../pages/Home/Home'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const Registration = lazy(() =>
  import('../../pages/Registration/Registration')
);
const Login = lazy(() => import('../../pages/Login/Login'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <AppStyle>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Registration />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
      <GlobalStyle />
    </AppStyle>
  );
}
