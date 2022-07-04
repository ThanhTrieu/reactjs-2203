import React from 'react';
import DecrementCounter from './components/Decrement';
import ResultCounter from './components/Result';
import { Provider } from 'react-redux';
import store from './store';

const CounterToolkit = () => {
    return(
        <Provider store={store}>
            <ResultCounter/>
            <DecrementCounter/>
        </Provider>
    )
}
export default CounterToolkit;