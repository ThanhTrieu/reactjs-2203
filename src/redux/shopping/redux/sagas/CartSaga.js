import { call, put, takeLatest } from 'redux-saga/effects';
import { actionCart } from '../reducers/CartSlice';
import { ADD_PRODUCT_TO_CART } from './ActionSaga';
import { ApiServices } from '../services/ApiService';

function* cartSaga({ id }){
    try {
        yield put(actionCart.startAddProductCart(true));
        const detailPd = yield call(ApiServices.getDetailProductById, id);
        if(detailPd !== null && !detailPd.hasOwnProperty('status')){
            // co data tra ve
            yield put(actionCart.addProductCartSuccess(detailPd));
        } else {
            // khong co data tra ve
            yield put(actionCart.addProductCartFailure({
                cod: 404,
                message: 'not found product'
            }));
        }
    } catch(err){
        yield put(actionCart.addProductCartFailure({
            cod: 500,
            message: err
        }));
    } finally {
        yield put(actionCart.startAddProductCart(false));
    }
}

// watcher
export function* watchCartSaga(){
    yield takeLatest(ADD_PRODUCT_TO_CART, cartSaga);
}