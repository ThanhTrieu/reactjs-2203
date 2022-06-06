import React, { useState } from 'react';
import LayoutCounter from "./components/Layout";
import ResultCounter from './components/Result';
import ButtonCounter from './components/commons/Button';

const AppCounter = () => {
    // khai bao state va cap nhap state
    const [count, setCount] = useState(0);
    // count: state
    // setCount: ham cap nhat lai state (tuong duong this.setState trong class)

    const changeCounter = (type) => {
        if(type === 'increment'){
            // cap nhat lai state
            setCount(count + 1);
        } else if(type === 'decrement'){
            setCount(count - 1);
        }
    }

    return (
        <LayoutCounter>
            <ResultCounter result={count} />
            <ButtonCounter
                type="button"
                name="increment"
                click={changeCounter}
            > + </ButtonCounter>
            <ButtonCounter
                type="button"
                name="decrement"
                click={changeCounter}
            > - </ButtonCounter>
        </LayoutCounter>
    )
}
export default AppCounter;