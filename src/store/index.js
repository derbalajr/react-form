import { configureStore, createSlice } from '@reduxjs/toolkit';

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

const store = configureStore({
  reducer: {
    individuals: individualsSlice.reducer,
  },
});

export default store;