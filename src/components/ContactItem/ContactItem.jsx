import React, { useState } from 'react';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredContacts,
  selectError,
  selectOperation,
  selectOperationId,
} from 'redux/contacts/contactSelectors';

import ContactForm from 'components/ContactForm/Form';

import {
  ContactItemWrap,
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
  const operationId = useSelector(selectOperationId);

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
  };

  const toggleEditState = () => {
    setIsEditingContact(!isEditingContact);
  };

  return reverseContacts.map(contact => (
    <li key={contact.id}>
      <ContactItemWrap>
        <ContactItemName>{contact.name}:</ContactItemName>
        <ContactItemNumber>{contact.number}</ContactItemNumber>
        <ContactItemButtonsWrap>
          {!isEditingContact && (
            <ContactItemButton
              type="button"
              id={contact.id}
              onClick={() => {
                setSelectedContactData(contact.id);
                toggleEditState();
              }}
            >
              {operation === 'edit' && operationId === contact.id && !error
                ? `Loading...`
                : `Edit`}
            </ContactItemButton>
          )}
          <ContactItemButton
            id={contact.id}
            type="button"
            onClick={() => {
              dispatch(deleteContact(contact));
            }}
          >
            {operation === 'delete' && !error && operationId === contact.id
              ? `Loading...`
              : `Delete`}
          </ContactItemButton>
        </ContactItemButtonsWrap>
      </ContactItemWrap>
      {editedContact !== null &&
        editedContact.id === contact.id &&
        isEditingContact && (
          <ContactForm
            use="edit"
            initialValues={editedContact}
            toggleFunction={toggleEditState}
          />
        )}
    </li>
  ));
}
