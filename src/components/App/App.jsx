import React from 'react';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from '../GlobalStyle';

import Layout from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Contacts } from 'pages/Contacts/Contacts';
import { Registration } from 'pages/Registration/Registration';
import { Login } from 'pages/Login/Login';

import { AppStyle } from './App.styled';

import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <AppStyle>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>

      <ToastContainer />
      <GlobalStyle />
    </AppStyle>
  );
}
