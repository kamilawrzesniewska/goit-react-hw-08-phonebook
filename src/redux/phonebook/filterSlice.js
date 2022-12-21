import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, { payload }) => payload,
  }
});

export const {setFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;