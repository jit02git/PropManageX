import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: ''
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
});

export const { setCategory } = filterSlice.actions;
export default filterSlice.reducer;