import * as types from "./constants";

export function paintMethod(state = types.drawLine, action) {
    switch (action.type) {
        case types.eraser:
            return action.payload;
        case types.drawLine:
			return action.payload;
		case types.drawSquare:
			return action.payload;
		case types.text:
			return action.payload;
		case types.sprayPaintSelected:
			return action.payload;
    }
    return state
}

export function changePaintMethod(method) {
	return {
		type: method,
		payload: method
	}
}
