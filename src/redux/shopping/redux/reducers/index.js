import { combineReducers } from 'redux';
import homeReducer from './HomeSlice';
import cartReducer from './CartSlice';

const rootReducer = combineReducers({
    home: homeReducer,
    cart: cartReducer
});
export default rootReducer;