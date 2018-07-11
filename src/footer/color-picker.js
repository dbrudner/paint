import React from 'react';

const ColorPicker = props => {
	return (
		<input style={{width: "32px", marginTop: "5px"}} type="color" onChange={e => props.changeColor(e.target.value)} value={props.color} />
	)
}

export default ColorPicker;