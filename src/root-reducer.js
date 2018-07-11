import { combineReducers } from 'redux';
import { paintMethod } from './redux/get-paint-method';
import { color } from "./redux/get-color";

const rootReducer = combineReducers({
    paintMethod,
    color
});

export default rootReducer;