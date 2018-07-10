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

		if (this.props.method === "drawLine") {
			this.setState({
				method: this.props.method,
				line: [[clientX, clientY]],
				top, left
			})
			this.recordLine(e);
		}
	}

	handleOnMouseUp = e => {
		this.setState({
			method: "",
			// lines: [...this.state.lines, this.state.line]
		})
	}

	recordLine = (e) => {
		if (this.state.method !== "drawLine") return;
		const { clientX, clientY } = e;

		this.setState({line: [...this.state.line, [clientX, clientY]]});
		this.drawLine();
	}

	drawLine = () => {
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
			<Container>
				<canvas
					id="canvas"
					onMouseMove={e => this.recordLine(e)}
					onMouseUp={e => this.handleOnMouseUp(e)}
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