import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from 'redux/contacts/contactsOperations';

const contactsInitialeState = {
  items: [],
  isLoading: false,
  error: null,
  operation: null,
  operationId: null,
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
  state.operation = null;
};

const handleAddFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
  state.operation = null;
  state.operationId = null;
};

const handleDeleteFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.operation = '';
  state.operationId = null;
  const index = state.items.findIndex(
    contact => contact.id === action.meta.arg.id
  );

  state.items.splice(index, 1);
};

const handleEditFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.operation = '';
  state.operationId = null;
  const index = state.items.findIndex(({ id }) => id === action.payload.id);
  if (index !== -1) {
    state.items[index] = action.payload;
  }
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialeState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.operation = 'fetch';
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.operation = 'add';
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.operation = `delete`;
        state.operationId = `${action.meta.arg.id}`;
      })
      .addCase(editContact.pending, (state, action) => {
        state.operation = `edit`;
        state.operationId = `${action.meta.arg.id}`;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, handleFetchFulfilled)
      .addCase(addContact.fulfilled, handleAddFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteFulfilled)
      .addCase(editContact.fulfilled, handleEditFulfilled),
});

export const contactsReducer = contactsSlice.reducer;
