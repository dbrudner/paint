import React from 'react';

const ToolbarButton = props => {

	const style = {
		position: "absolute",
		top: `${props.top}px`,
		left: `${props.left}px`,
		width: "44px",
		height: "27px"
	}

	return (
		<button style={style}>
			<i className={props.icon}></i>
		</button>
	)
}

export default ToolbarButton;