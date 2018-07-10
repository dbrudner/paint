import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: inline-block;
	background-color: #6f6f6f;
	padding: 20px 200px 200px 20px;
	width: 100%;
	border: 2px solid;
    border-bottom-color: #c7c7c7;
    border-right-color: #c7c7c7;
    border-left-color: #808080;
    border-top-color: #808080;
    background-color: #7b7b7b;
	padding: 10px;

	canvas {
		background-color: white;
	}
`

class Canvas extends Component {

	constructor(props) {
		super(props);
		this.state = {
			color: "",
			drawing: false,
			line: [],
			lines: [],
			drawSquareMouseUp: false
		}
	}

	// maybeOnClick() {
	// 	const ctx = this.refs.canvas.getContext('2d');
	// 	ctx.beginPath();
	// 	ctx.moveTo(50, 50)
	// 	ctx.lineTo(100, 100);
	// 	ctx.stroke();
	// }

	handleChange = (name, value) => this.setState({[name]: value})

	handleOnMouseDown = e => {
		const canvas = document.getElementById("canvas");
		const { top, left } = canvas.getBoundingClientRect();
		const { clientX, clientY } = e;

		this.setState({
			method: this.props.method,
			line: [[clientX, clientY]],
			top, left
		});
	}

	handleOnMouseUp = () => {
		if (this.state.method === "drawLine") return
		else if (this.state.method === "drawSquare") {
			this.setState({ drawSquareMouseUp: true })
			return this.drawSquare()
		}
	}

	getPath = e => {
		const { clientX, clientY } = e;
		this.setState({line: [...this.state.line, [clientX, clientY]]});
		this.handleMethod();
	}

	handleMethod = () => {
		if (this.state.method === "drawLine") return this.drawLine();
		if (this.state.method === "drawSquare") return this.drawSquare();
	}

	drawLine = () => {
		const ctx = this.refs.canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(this.state.line[0][0] - this.state.left, this.state.line[0][1] - this.state.top);
		this.state.line.forEach(point => {
			ctx.lineTo(point[0] - this.state.left, point[1] - this.state.top);
			ctx.strokeStyle = this.props.color;
			ctx.lineWidth = this.props.brushSize;
			ctx.stroke();
		});
	}

	drawSquare = () => {
		const ctx = this.refs.canvas.getContext('2d');

		// getPoint = line => {
		// 	return line.reduce((x, point) => {
		// 		if (!x) return point;
		// 		if (Math.abs(point) > Math.abs(x)) return x
		// 	}, null)
		// }


		const left = this.state.line[0][0] - this.state.left
		const top = this.state.line[0][1] - this.state.top
		const right = this.state.line[this.state.line.length - 1][0] - this.state.left
		const bottom = this.state.line[this.state.line.length - 1][1] - this.state.top

		if (!this.state.drawSquareMouseUp) return;

		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.moveTo(left, top);
		ctx.lineTo(right, top);
		ctx.lineTo(right, bottom);
		ctx.lineTo(left, bottom);
		ctx.lineTo(left, top);
		ctx.stroke();

		this.setState({ drawSquareMouseUp: false })
	}

	render() {
		return (
			<Container>
				<canvas
					id="canvas"
					onMouseMove={e => this.getPath(e)}
					onMouseUp={this.handleOnMouseUp}
					onMouseDown={e => this.handleOnMouseDown(e)}
					onMouseLeave={() => this.setState({drawing: false})}
					ref="canvas"
					width="800px"
					height="400px"
				/>
			</Container>
		)
	}
}

export default Canvas;