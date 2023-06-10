import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/filterSelector';
export const selectContactList = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectOperation = state => state.contacts.operation;

export const selectFilteredContacts = createSelector(
  [selectContactList, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
