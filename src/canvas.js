import React, { Component } from 'react';

const canvasStyle = {
	border: "1px solid black",
	height: "500px",
	width: "1000px",
	margin: "50px 50px 0 50px"
}

class Canvas extends Component {

	constructor(props) {
		super(props);
		this.state = {  
			color: "",
		}
	}

	getLinePath = line => {
		return line.reduce((pathString, point, i) => {
			const x = point[0]
			const y = point[1]
			if (!i) return `M ${x} ${y}`
			return `${pathString} L ${x} ${y}`
		}, "")
	}

	getLinePaths = lines => {
		return lines.map(line => this.getLinePath(line));
	}

	renderLine = path => {
		return <path d={path} fill="white" stroke="red" />
	}

	renderLines = lines => {
		return lines.map(line => this.renderLine(line));
	}

	render() { 
		if (this.props.lines.length) {
			console.log("HI");
			console.log(this.getLinePaths(this.props.lines))
		}

		return (  
			<div 
			onMouseMove={e => this.props.drawLine(e)} 
			onMouseUp={e => this.props.handleOnMouseUp(e)} 
			onMouseDown={e => this.props.handleOnMouseDown(e)} 
			style={canvasStyle}>
				<svg style={{width: "1000px", height: "500px"}}>
					{this.props.lines.length ? this.renderLines(this.getLinePaths(this.props.lines)) : null}
				</svg>
			</div>
		)
	}
}
 
export default Canvas;