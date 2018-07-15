import { combineReducers } from 'redux';
import { paintMethod } from './redux/get-paint-method';
import { color } from "./redux/get-color";
import { palette } from "./redux/get-palette";

const rootReducer = combineReducers({
    paintMethod,
    color,
    palette
});

export default rootReducer;