import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'; // middleware
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware, logger)
    );
    // running saga
    sagaMiddleware.run(rootSaga);
    return { store }
}
export default configureStore;