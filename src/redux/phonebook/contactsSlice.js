import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null
  },
  extraReducers: {
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.contacts = payload
    },
    [fetchContacts.rejected](state, { payload }) {
        alert(payload);
        state.error = payload;
        state.isLoading = false;
    },
    [fetchContacts.pending](state, action) {
        state.isLoading = true;
    },
    [addContact.fulfilled](state, {payload}) {
        state.isLoading = false;
        state.error = null;
        state.contacts = [payload, ...state.contacts]
    },
    [addContact.rejected](state, {payload}) {
        state.isLoading = false;
        state.error = payload;
    },
    [addContact.pending](state, {payload}) {
        state.isLoading = true;
        state.error = null;
    },

    [removeContact.fulfilled](state, {payload}) {
        state.isLoading = false;
        state.error = null;
        const idRemover = payload.data.id;
        state.contacts = state.contacts.filter(({id}) => id !== idRemover)
    },
    [removeContact.rejected](state, {payload}) {
        state.isLoading = false;
        state.error = payload;
    },
    [removeContact.pending](state, {payload}) {
        state.isLoading = true;
        state.error = null;
    }
  },
});

export const { addNewContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;