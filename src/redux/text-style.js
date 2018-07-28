import * as types from "./constants";

const textStyleState = {
	bold: false,
	italic: false,
	underline: false,
	font: "Times New Roman",
	fontSize: 8
}

export function textStyleReducer(state = textStyleState, action) {
	const { payload } = action

	switch (action.type) {
		case types.FONT_CHANGED:
			return {...state, font: payload}
		case types.FONT_SIZE_CHANGED:
			return {...state, fontSize: payload}
		case types.FONT_STYLE_CHANGED:
			return {...state, [payload]: !state[payload]}
	}
	return state
}

export const doChangeFont = font => {
	return {
		type: types.FONT_CHANGED,
		payload: font
	}
}

export const doChangeFontSize = size => {
	return {
		type: types.FONT_SIZE_CHANGED,
		payload: size
	}
}

export const doChangeFontStyle = style => {
	return {
		type: types.FONT_STYLE_CHANGED,
		payload: style
	}
}