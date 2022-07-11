import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'; // middleware
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const myConfigureStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: false,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(sagaMiddleware, logger)
    });
    const persistor = persistStore(store);
    // running saga
    sagaMiddleware.run(rootSaga);
    return { store, persistor }
}
export default myConfigureStore;