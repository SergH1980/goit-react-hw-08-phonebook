import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactList,
  selectError,
  selectOperation,
} from 'redux/contacts/contactSelectors';
import { addContact, editContact } from 'redux/contacts/contactsOperations';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Form,
  FormLabel,
  Field,
  SubmitButton,
  EditButtonsWrap,
  ErrorMessage,
} from './Form.styled';

const toastSettings = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

function notifySameName(data) {
  toast.warn(`${data} is already in contacts`, toastSettings);
}

function notifyEditSuccessful(data) {
  toast.success(`${data} was successfully edited!`, toastSettings);
}

const SignupSchem = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(40, 'Too long!')
    .required(`Please enter valid information`),
  number: Yup.string()
    .min(7, 'Too Short!')
    .max(30, 'Too long!')
    .required(`Please enter valid information`),
});

export default function ContactForm(props) {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContactList);
  const error = useSelector(selectError);
  const operation = useSelector(selectOperation);
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={SignupSchem}
      onSubmit={(values, { resetForm }) => {
        if (props.use === 'add') {
          const toCompareName = contact => {
            return contact.name === values.name;
          };

          if (!contactList.some(toCompareName)) {
            dispatch(addContact(values));
            return resetForm();
          }
          notifySameName(values.name);
        }
        if (props.use === 'edit') {
          const nameCheck = contactList.filter(
            contact => contact.name === values.name && contact.id !== values.id
          );

          if (nameCheck.length === 0) {
            dispatch(editContact(values));
            props.toggleFunction();
            notifyEditSuccessful(values.name);
            return resetForm();
          }
          notifySameName(values.name);
        }
      }}
    >
      <Form>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Field
          name="name"
          placeholder="Contact's information"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorMessage name="name" component="div" />
        <FormLabel htmlFor="number">Number</FormLabel>
        <Field
          type="number"
          name="number"
          placeholder="Phone number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ErrorMessage name="number" component="div" />
        {props.use === 'add' && (
          <SubmitButton name="submit" type="submit">
            {operation === 'add' && !error ? `Loading...` : `Add contact`}
          </SubmitButton>
        )}
        {props.use === 'edit' && (
          <EditButtonsWrap>
            <SubmitButton name="submit" type="submit">
              Confirm
            </SubmitButton>
            <SubmitButton type="button" onClick={props.toggleFunction}>
              Cancel
            </SubmitButton>
          </EditButtonsWrap>
        )}
      </Form>
    </Formik>
  );
}
