import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const contactsInitialeState = {
  items: [],
  isLoading: false,
  error: null,
  operation: null,
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
};

const handleDeleteFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.operation = null;
  const index = state.items.findIndex(
    contact => contact.id === action.meta.arg.id
  );

  state.items.splice(index, 1);
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
        state.isLoading = true;

        state.operation = `${action.meta.arg.id}`;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, handleFetchFulfilled)
      .addCase(addContact.fulfilled, handleAddFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteFulfilled),
});

export const contactsReducer = contactsSlice.reducer;
