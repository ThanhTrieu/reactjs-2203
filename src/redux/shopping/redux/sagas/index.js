import { call, all } from 'redux-saga/effects';
import { watchHomeSaga } from './HomeSaga';

export default function* rootSaga(){
    yield all([
        call(watchHomeSaga),
    ]);
}