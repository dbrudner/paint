import * as types from "./constants";

export function palette(state = ["black"], action) {
    switch (action.type) {
        case types.getPalette:
            return action.payload;
    }
    return state
}

export function changePalette(palette) {
	return {
		type: types.getPalette,
		payload: palette
	}
}
