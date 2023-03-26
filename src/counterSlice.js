import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    // reducerssssss
    up: (state, action) => {
      console.log(action);
      // Executed when action.type is up
      state.value = state.value + action.payload; // payload
    },
  },
});

export default counterSlice;
export const { up } = counterSlice.actions;
//Among counterSlice.actions, up is exported.
