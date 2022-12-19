import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'redux/services/contactsApi';
import filterReducer from 'redux/filterSlice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
  devTools: true,
});

export default store;