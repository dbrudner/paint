import React, { Component } from 'react';

const canvasStyle = {
	border: "1px solid black",
	margin: "50px 50px 0 50px"
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
		this.setState({
			drawing: true,
			line: [[clientX, clientY]]
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
		const ctx = this.refs.canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(this.state.line[0][0] - 50, this.state.line[0][1] - 130)
		this.state.line.forEach(point => {
			ctx.lineTo(point[0] - 50, point[1] - 130)
			ctx.strokeStyle = this.props.color
			ctx.lineWidth = 10
			ctx.stroke();
		})
	}


	render() {

		return (
			<canvas
				onMouseMove={e => this.recordLine(e)}
				onMouseUp={e => this.handleOnMouseUp(e)}
				onMouseDown={e => this.handleOnMouseDown(e)}
				onMouseLeave={() => this.setState({drawing: false})}
				style={canvasStyle}
				height={500}
				width={1000}
				ref="canvas"
			>
			</canvas>
		)
	}
}

export default Canvas;