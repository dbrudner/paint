import * as types from "./constants";

export function color(state = "black", action) {
	console.log(state, action);
    switch (action.type) {
        case types.color:
            return action.payload;
    }
    return state
}

export function changeColor(color) {
	return {
		type: types.color,
		payload: color
	}
}
