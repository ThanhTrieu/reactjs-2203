import { combineReducers } from 'redux';
import homeReducer from './HomeSlice';

const rootReducer = combineReducers({
    home: homeReducer,
});
export default rootReducer;