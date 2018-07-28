import * as types from "./constants";

export const colorReducer = (state = "black", action) => {
	switch (action.type) {
		case types.COLOR_CHANGED:
			return action.payload;
	}
	return state
}

export const doChangeColor = color => {
	return {
		type: types.COLOR_CHANGED,
		payload: color
	}
}
