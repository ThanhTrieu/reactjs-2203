import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'; // middleware
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const myConfigureStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware, logger)
    });
    // running saga
    sagaMiddleware.run(rootSaga);
    return { store }
}
export default myConfigureStore;