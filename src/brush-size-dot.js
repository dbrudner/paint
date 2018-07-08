import React from 'react';

const style = {
}

const BrushSizeDot = props => {

	console.log(props);

	const {size, handleChange } = props

	const handleClick = size => {
		props.handleChange("brushSize", size)
		props.closeBrushWindow();
	}

	return (
		<button onClick={() => handleClick(size)} style={style}>
			<svg height={size} width={size}>
				<circle cx={size/2} cy={size/2} r={size * .4} fill="black" />
			</svg>
		</button>
		
	)
}

export default BrushSizeDot;