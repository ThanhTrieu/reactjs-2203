import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import rootReducer from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

const myConfigureStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware, logger)
    });
    sagaMiddleware.run(rootSaga);
    return { store }
}
export default myConfigureStore;