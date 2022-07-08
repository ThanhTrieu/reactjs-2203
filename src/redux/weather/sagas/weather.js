import { call, put, takeLatest } from 'redux-saga/effects';
//import * as actions from '../actions/weather';
import {
    startSearchData,
    finishedSearchData,
    getDataWeatherSuccess,
    getDataWeatherFailure
} from '../reducers/slice-weather';
import { SEARCH_DATA_REQUEST } from '../actions/types';
import { api } from '../services/weather';

// voi redux saga bat buoc phai dung generator function
// khong cac function nao khac

// worker saga: xu ly cac cong viec ma action dispacth saga
function* weatherSaga({ city }){
    try {
        // dispatch action vao store
        yield put(startSearchData(true)); // cap nhat state loading trong reducer
        // call api tu services
        const result = yield call(api.getDataWeatherByCityName, city);
        if(result.hasOwnProperty('cod') && result['cod'] === 200){
            // co du lieu tra ve
            yield put(getDataWeatherSuccess(result));
        } else {
            // khong co du lieu tra ve
            yield put(getDataWeatherFailure({
                cod: 404,
                message: 'Not found city',
            }));
        }
    } catch (err){
        yield put(getDataWeatherFailure({
            cod: 500,
            message: err,
        }));
    } finally {
        // dung viec xu ly cua action vao saga - xong het roi
        // cap nhat lai state loading
        yield put(finishedSearchData(false));
    }
}

// watcher saga
export function* watchWeatherSaga(){
    // theo doi action goi vao trong saga
    yield takeLatest(SEARCH_DATA_REQUEST, weatherSaga);
}