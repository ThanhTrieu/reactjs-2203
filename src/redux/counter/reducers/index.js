import { combineReducers } from 'redux'; // gom cac reducer lai voi nhau - day vao trong store de quan ly
import { counterReducer } from './counter';

const rootReducer = combineReducers({
    counter: counterReducer
});
export default rootReducer; // reducer se nam trong store de quan ly cac reducer khac