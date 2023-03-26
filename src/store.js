import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

// Using the toolkit, stores (slices) with various purposes are formed, and one store is built based on them.

const store = configureStore({
  // It makes scattered stores into one store.
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
