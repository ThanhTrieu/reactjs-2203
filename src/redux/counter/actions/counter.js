// dinh nghia cac function mieu ta cho cac action
import * as typeActions from './types';

export const incrementCounter = (val) => ({
    type: typeActions.INCREMENT_COUNTER,
    payload: { value: val }
});

export const decrementCounter = (val) => ({
    type: typeActions.DECREMENT_COUNTER,
    payload: { value: val }
});