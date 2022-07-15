import { call, all } from 'redux-saga/effects';
import { watchHomeSaga } from './HomeSaga';
import { watchCartSaga } from './CartSaga';

export default function* rootSaga(){
    yield all([
        call(watchHomeSaga),
        call(watchCartSaga),
    ]);
}