import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
//import { counterReducer } from './reducers/counter';
import counterReducer from './slices/counter';

const store = configureStore({
    reducer:{
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
export default store;