export const eraser = "ERASER";
export const drawLine = "DRAW_LINE";
export const drawSquare = "DRAW_SQUARE";

export function paintMethod(state = drawLine, action) {
    switch (action.type) {
        case eraser:
            return action.payload;
        case drawLine:
			return action.payload;
		case drawSquare:
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
