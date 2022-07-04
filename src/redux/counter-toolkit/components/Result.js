import React from 'react';
import { useSelector } from 'react-redux';
import { getStateCount } from '../selectors/counter';

const ResultCounter = () => {
    const count = useSelector(getStateCount);

    return (
        <h1> {count} </h1>
    )
}
export default React.memo(ResultCounter);