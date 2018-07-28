import * as types from "./constants";

export const paintMethodReducer = (state = types.DRAW_LINE, action) => {
	switch (action.type) {
		case types.METHOD_SELECTED:
			return action.payload;
	}
	return state
}

export const doChangePaintMethod = method => {
	return {
		type: types.METHOD_SELECTED,
		payload: method
	}
}
