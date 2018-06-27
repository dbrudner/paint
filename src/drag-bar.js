import React from 'react';



export default function DragBar(props) {

	const style = {
		width: "100%",
		height: "20px",
		backgroundColor: "#5f90bf",
		position: "absolute",
		borderBottom: "1px solid #f3f3f3",
		top: props.x,
		left: props.y
	}

	return (
		<div onClick={props.reposition} style={style} />
	)
}