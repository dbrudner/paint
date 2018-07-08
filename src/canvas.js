import React, { Component } from 'react';

const canvasStyle = {
	position: "fixed",
	top: "100px",
	left: "250px",
	border: "2px solid #cccccc",
	borderRadius: "5px",
	backgroundColor: "white"
}

class Canvas extends Component {

	constructor(props) {
		super(props);
		this.state = {
			color: "",
			drawing: false,
			line: [],
			lines: []
		}
	}

	maybeOnClick() {
		const ctx = this.refs.canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(50, 50)
		ctx.lineTo(100, 100);
		ctx.stroke();
	}

	handleChange = (name, value) => this.setState({[name]: value})

	handleOnMouseDown = e => {
		const { clientX, clientY } = e;
		const canvas = document.getElementById("canvas");
		const { top, left } = canvas.getBoundingClientRect();
		console.log(top, left);

		this.setState({
			drawing: true,
			line: [[clientX, clientY]],
			top, left
		})
		this.recordLine(e);
	}

	handleOnMouseUp = e => {
		this.setState({
			drawing: false,
			// lines: [...this.state.lines, this.state.line]
		})
	}

	recordLine = (e) => {
		if (!this.state.drawing) return;
		const { clientX, clientY } = e;

		this.setState({line: [...this.state.line, [clientX, clientY]]});
		this.drawLine();
	}

	drawLine = () => {
		console.log(this.state.line[0])
		const ctx = this.refs.canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(this.state.line[0][0] - this.state.left, this.state.line[0][1] - this.state.top)
		this.state.line.forEach(point => {
			ctx.lineTo(point[0] - this.state.left, point[1] - this.state.top)
			ctx.strokeStyle = this.props.color
			ctx.lineWidth = this.props.brushSize
			ctx.stroke();
		})
	}

	render() {

		return (
			<canvas
				id="canvas"
				onMouseMove={e => this.recordLine(e)}
				onMouseUp={e => this.handleOnMouseUp(e)}
				onMouseDown={e => this.handleOnMouseDown(e)}
				onMouseLeave={() => this.setState({drawing: false})}
				style={canvasStyle}
				height={500}
				width={1000}
				ref="canvas"
			/>
		)
	}
}

export default Canvas;