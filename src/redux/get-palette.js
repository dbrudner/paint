import * as types from "./constants";


export function palette(state = types.palette, action) {
    console.log(action.payload);
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
