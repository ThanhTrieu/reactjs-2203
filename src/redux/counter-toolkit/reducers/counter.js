import { createReducer } from '@reduxjs/toolkit';
import { decrementCounter } from '../actions/counter';

const initialState = { count: 0 };

export const counterReducer = createReducer(initialState, (builder) => {
    builder.addCase(decrementCounter, (state) => {
        state.count--;
    })
});