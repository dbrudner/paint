import * as types from "./constants";

export const brushSizeReducer = (state = 2, action) => {
	switch (action.type) {
		case types.BRUSH_SIZE_CHANGED:
			return action.payload;
	}
	return state
}

export const doChangeBrushSize =  brushSize => {
	return {
		type: types.BRUSH_SIZE_CHANGED,
		payload: brushSize
	}
}
