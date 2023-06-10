import React from 'react';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from '../GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';

import Layout from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Contacts } from 'pages/Contacts/Contacts';
import RegistrationForm from 'pages/RegistrationForm/RegistrationForm';
import LoginForm from 'pages/LoginForm/LoginForm';

import { AppStyle } from './App.styled';

import { Route, Routes } from 'react-router-dom';

// import ContactForm from '../ContactForm/Form';
// import ContactList from '../ContactList/ContactList';
// import Section from '../Section/Section';
// import ContactFilter from '../ContactFilter/ContactFilter';

export default function App() {
  return (
    <AppStyle>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
      </Routes>

      {/* <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <ContactFilter />
        <ContactList />
      </Section> */}
      <ToastContainer />
      <GlobalStyle />
    </AppStyle>
  );
}
