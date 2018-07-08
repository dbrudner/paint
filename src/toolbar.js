import React from 'react';
import ColorPicker from './color-picker'
import BrushSize from './brush-size'

const ToolBar = props => {
	return (
		<div>
			<ColorPicker getColor={props.handleChange} color={props.color} />
			<BrushSize handleChange={props.handleChange} />
		</div>
	)
}
 
export default ToolBar;