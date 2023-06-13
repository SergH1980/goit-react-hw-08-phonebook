import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { selectAuthOperation, selectError } from 'redux/auth/authSelectors';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Form,
  FormLabel,
  Field,
  SubmitButton,
  ErrorMessage,
  RegisterFormHeader,
} from './RegistrationForm.styled';

const SignupSchem = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(40, 'Too long!')
    .required(`Please enter valid information`),
  email: Yup.string()
    .min(3, 'Too Short!')
    .max(40, 'Too long!')
    .required(`Please enter valid information`),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(30, 'Too long!')
    .required(`Please enter valid information`),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const authOperation = useSelector(selectAuthOperation);
  const error = useSelector(selectError);

  return (
    <div>
      <RegisterFormHeader>
        To register, please fill out this form:
      </RegisterFormHeader>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={SignupSchem}
        onSubmit={(registrationValues, { resetForm }) => {
          dispatch(
            register({
              name: registrationValues.name,
              email: registrationValues.email,
              password: registrationValues.password,
            })
          );
          // resetForm();
        }}
      >
        <Form>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Field
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Field
            type="email"
            name="email"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="email" component="div" />
          <FormLabel htmlFor="password">Password</FormLabel>
          <Field
            type="password"
            name="password"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="password" component="div" />
          <SubmitButton name="submit" type="submit">
            {authOperation === 'register' && !error ? `Loading...` : `Register`}
          </SubmitButton>
        </Form>
      </Formik>
    </div>
  );
}
