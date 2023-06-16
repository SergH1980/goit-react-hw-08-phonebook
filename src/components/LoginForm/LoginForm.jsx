import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import usePasswordToggle from 'components/hooks/usePasswordToggle';

import { selectAuthOperation, selectError } from 'redux/auth/authSelectors';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Form,
  FormLabel,
  Field,
  SubmitButton,
  ErrorMessage,
  LoginFormHeader,
  PasswordIcon,
  PasswordWrap,
} from './LoginForm.styled';

const SignupSchem = Yup.object().shape({
  email: Yup.string()
    .min(3, 'Too Short!')
    .max(40, 'Too long!')
    .required(`Please enter valid information`),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(30, 'Too long!')
    .required(`Please enter valid information`),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const authOperation = useSelector(selectAuthOperation);
  const error = useSelector(selectError);

  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  return (
    <div>
      <LoginFormHeader>Please enter valid credetials to login:</LoginFormHeader>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignupSchem}
        onSubmit={(loginValues, { resetForm }) => {
          dispatch(
            logIn({
              email: loginValues.email,
              password: loginValues.password,
            })
          );
          // resetForm();
        }}
      >
        <Form>
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
          <PasswordWrap>
            <Field
              type={PasswordInputType}
              name="password"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <PasswordIcon>{ToggleIcon}</PasswordIcon>
          </PasswordWrap>

          <ErrorMessage name="password" component="div" />
          <SubmitButton name="submit" type="submit">
            {authOperation === 'login' && !error ? `Loading...` : `Login`}
          </SubmitButton>
        </Form>
      </Formik>
    </div>
  );
}
