import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import weatherReducer from './slice-weather';


const configWeatherPersistReducer = {
    // cau hinh persist cho weatherReducer
    key: 'weatherPersistor',
    storage: storage,
    whitelist: ['weathers'], // chi luu state nao trong reducer vao storage
}

const configRootPersistReducer = {
    key: 'rootWeatherPersistor',
    storage:storage,
    // khong khai bao whitelist hay blacklist
    // tu dong hieu luu tat ca cac state cua reducer sau nay nam trong root Reducer
    // khai bao nam trong whitelist hay blacklist thi khai bao ten cua reducer
    whitelist: ['weather'] // chi luu tru du lieu nam trong weatherReducer
}

const rootReducer = combineReducers({
    weather: persistReducer(configWeatherPersistReducer, weatherReducer),
});
export default persistReducer(configRootPersistReducer, rootReducer);