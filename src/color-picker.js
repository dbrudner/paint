import React from 'react';

const ColorPicker = props => {
	console.log(props);
	return (
		<input type="color" onChange={e => props.getColor("color", e.target.value)} value={props.color} />
	)
}
 
export default ColorPicker;