import { configureStore } from '@reduxjs/toolkit';
import individualsReducer from './individualsSlice';
const store = configureStore({
  reducer: {
    individuals: individualsReducer,
  },
});

export default store;