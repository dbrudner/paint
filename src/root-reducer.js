import { combineReducers } from 'redux';
import { paintMethod } from './redux/get-paint-method';
import { color } from "./redux/get-color";
import { palette } from "./redux/get-palette";
import { textStyle } from "./redux/get-text-style";

const rootReducer = combineReducers({
    paintMethod,
    color,
    palette,
    textStyle
});

export default rootReducer;