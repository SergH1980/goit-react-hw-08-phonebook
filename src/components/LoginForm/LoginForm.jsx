import React from 'react';
// import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Form,
  FormLabel,
  Field,
  SubmitButton,
  ErrorMessage,
  LoginFormHeader,
} from './LoginForm.styled';

// const toastSettings = {
//   position: 'top-center',
//   autoClose: 2000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   theme: 'light',
// };

// function notifySameName(data) {
//   toast.warn(`${data} is already in contacts`, toastSettings);
// }

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
          resetForm();
          //   const toCompareName = contact => {
          //     return contact.name === values.name;
          //   };
          //   if (!contactList.some(toCompareName)) {
          //     dispatch(addContact(values));
          //     return resetForm();
          //   }
          // notifySameName(values.name);
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
          <Field
            type="password"
            name="password"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="password" component="div" />
          <SubmitButton name="submit" type="submit">
            {/* {operation === 'add' && !error ? `Loading...` : `Add contact`} */}
            Login
          </SubmitButton>
        </Form>
      </Formik>
    </div>
  );
}