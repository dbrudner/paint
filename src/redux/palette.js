import * as types from "./constants";
import { palette } from "./constants";


export const paletteReducer = (state = palette, action) => {
	switch (action.type) {
		case types.PALETTE_UPDATED:
			const updatedPalette = [action.payload, ...palette.slice(0, palette.length - 1)]
			return updatedPalette;
	}
	return state
}

export const doUpdatePalette = palette => {
	return {
		type: types.PALETTE_UPDATED,
		payload: palette
	}
}
