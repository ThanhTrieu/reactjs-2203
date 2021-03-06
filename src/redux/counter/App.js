import React from 'react';
import IncrementCounter from './components/Increment';
import DecrementCounter from './components/Decrement';
import ResultCounter from './components/Result';
import { Provider } from 'react-redux';
import store from './store';

const ReduxCounter = () => {
    return (
        <Provider store={store}>
            <ResultCounter/>
            <IncrementCounter/>
            <DecrementCounter/>
        </Provider>
    )
}
export default React.memo(ReduxCounter)