import { createDraftSafeSelector } from '@reduxjs/toolkit';

// state application
const stateCounter = state => state.counter;

// ham nay giup mh lay state trong store
export const getStateCount = createDraftSafeSelector(
    stateCounter,
    state => state.count
)