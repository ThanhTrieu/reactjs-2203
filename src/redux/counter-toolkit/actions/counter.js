import { createAction } from '@reduxjs/toolkit';

export const decrementCounter = createAction('decrement/Counter');

// decrementCounter(3); // 3 payload