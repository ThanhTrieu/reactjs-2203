import React from 'react';
import { useDispatch } from 'react-redux';
//import { decrementCounter } from '../actions/counter';
import { decrement } from '../slices/counter';

const DecrementCounter = () => {
    const dispatch = useDispatch();
    return (
        <button
            type="button"
            onClick={()=>dispatch(decrement())}
        > - </button>
    )
}
export default React.memo(DecrementCounter);