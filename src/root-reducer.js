import { combineReducers } from 'redux';
import { paintMethod } from './redux/get-paint-method';

const rootReducer = combineReducers({
    paintMethod
});

export default rootReducer;