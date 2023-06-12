import React, { useState } from 'react';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredContacts,
  selectError,
  selectOperation,
} from 'redux/contacts/contactSelectors';

import ContactForm from 'components/ContactForm/Form';

import {
  ContactItemStyled,
  ContactItemName,
  ContactItemNumber,
  ContactItemButton,
  EmptyFilterResults,
  ContactItemButtonsWrap,
} from './ContactItem.styled';

export default function ContactItem() {
  const dispatch = useDispatch();
  const [editedContact, setEditedContact] = useState(null);

  const [isEditingContact, setIsEditingContact] = useState(false);

  const error = useSelector(selectError);
  const operation = useSelector(selectOperation);

  const contacts = useSelector(selectFilteredContacts);

  const reverseContacts = [...contacts].reverse();

  if (reverseContacts.length < 1) {
    return (
      <EmptyFilterResults>
        No contacts in your phonebook <br />
        or
        <br /> No contacts match your query
      </EmptyFilterResults>
    );
  }

  const setSelectedContactData = id => {
    const selectedContact = contacts.find(contact => contact.id === id);

    setEditedContact(selectedContact);
    setIsEditingContact(!isEditingContact);
    console.log(isEditingContact);
    console.log(editedContact);
  };

  return reverseContacts.map(contact => (
    <ContactItemStyled key={contact.id}>
      {editedContact !== null &&
      editedContact.id === contact.id &&
      isEditingContact ? (
        <ContactForm />
      ) : (
        <div>
          <ContactItemName>{contact.name}:</ContactItemName>
          <ContactItemNumber>{contact.number}</ContactItemNumber>
          <ContactItemButtonsWrap>
            <ContactItemButton
              type="button"
              id={contact.id}
              onClick={() => {
                setSelectedContactData(contact.id);
              }}
            >
              Edit
            </ContactItemButton>
            <ContactItemButton
              id={contact.id}
              type="button"
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
            >
              {operation === contact.id && !error ? `Loading...` : `Delete`}
            </ContactItemButton>
          </ContactItemButtonsWrap>
        </div>
      )}
    </ContactItemStyled>
  ));
}
