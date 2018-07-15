import * as types from "./constants";

export function color(state = 2, action) {
	switch (action.type) {
		case types.brushSize:
			return action.payload;
	}
	return state
}

export function changeBrushSize(brushSize) {
	return {
		type: types.brushSize,
		payload: brushSize
	}
}
