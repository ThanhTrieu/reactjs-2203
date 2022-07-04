import React from 'react';
import { useSelector } from 'react-redux';
import { selectorCounter } from '../reducers/counter';

const ResultCounter = () => {
    const count = useSelector(selectorCounter);
    // useSelector: hooks cua react-redux giup lay gia tri tu store ra cac component

    return (
        <h1> { count } </h1>
    )
}
export default React.memo(ResultCounter);