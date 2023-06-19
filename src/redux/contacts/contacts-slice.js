import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contacts-operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    isRefresh: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, pendingReducer)
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchAllContacts.rejected, rejectedReducer)
      .addCase(addContact.pending, pendingReducer)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [action.payload, ...state.items];
        state.error = null;
      })
      .addCase(addContact.rejected, rejectedReducer)
      .addCase(deleteContact.pending, pendingReducer)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, rejectedReducer)
      .addCase(updateContact.pending, (state, action) => {
        state.isLoading = true;
        state.isRefresh = true;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isRefresh = false;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.slice(index, 0, action.payload);
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isRefresh = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
