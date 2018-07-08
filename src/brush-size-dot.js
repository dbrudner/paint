import React from 'react';

const style = {
}

const BrushSizeDot = props => {

	const {size, handleChange } = props

	return (
		<button onClick={() => handleChange(size)} style={style}>
			<svg height={size} width={size}>
				<circle cx={size/2} cy={size/2} r={size * .4} fill="black" />
			</svg>
		</button>
		
	)
}

export default BrushSizeDot;