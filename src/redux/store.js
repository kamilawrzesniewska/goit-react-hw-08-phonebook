import { configureStore } from '@reduxjs/toolkit';
import { phonebookApi } from '../services/phonebookApi';

import { filterReducer, tokenReducer } from './Reducers';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    token: tokenReducer,
    [phonebookApi.reducerPath]: phonebookApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phonebookApi.middleware),
});