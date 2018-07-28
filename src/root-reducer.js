import { combineReducers } from 'redux';
import { paintMethodReducer } from './redux/paint-method';
import { colorReducer } from "./redux/color";
import { brushSizeReducer } from "./redux/brush-size";
import { paletteReducer } from "./redux/palette";
import { textStyleReducer } from "./redux/text-style";

const rootReducer = combineReducers({
	paintMethod: paintMethodReducer,
	color: colorReducer,
	palette: paletteReducer,
	textStyle: textStyleReducer,
	brushSize: brushSizeReducer
});

export default rootReducer;