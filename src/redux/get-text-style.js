import * as types from "./constants";

const textStyleState = {
	bold: false,
	italic: false,
	underline: false
}

export function textStyle(state = textStyleState, action) {
	switch (action.type) {
		case types.changeTextStyle:
			return action.payload;
	}
	return state
}

export function changeFontStyle(fontStyle) {
	return {
		type: types.changeTextStyle,
		payload: fontStyle
	}
}

