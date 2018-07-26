import * as types from "./constants";

const textStyleState = {
	bold: false,
	italic: false,
	underline: false,
	font: "Times New Roman",
	fontSize: 8
}

export function textStyle(state = textStyleState, action) {
	switch (action.type) {
		case types.changeTextStyle:
			return action.payload;
		case types.changedFontSize:
			return action.payload;
		case types.changedFont:
			return action.payload;
	}
	return state
}

export function changeFontStyle(fontStyle) {
	console.log(fontStyle);
	return {
		type: types.changeTextStyle,
		payload: fontStyle
	}
}

