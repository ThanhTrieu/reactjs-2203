import { createSlice } from '@reduxjs/toolkit';

// deafault state
const initialState = { count : 0};

// slice: co san luon action va reducer
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        decrement(state) {
            // state va action
            state.count--;
        }
    }
});
export const { decrement } = counterSlice.actions; // action
export default counterSlice.reducer; // reducer