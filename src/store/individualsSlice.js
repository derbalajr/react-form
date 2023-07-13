import { createSlice } from '@reduxjs/toolkit';

const individualsSlice = createSlice({
  name: 'individuals',
  initialState: [],
  reducers: {
    addIndividual: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addIndividual } = individualsSlice.actions;
export default individualsSlice.reducer;