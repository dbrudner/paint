import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux'
import * as types from '../get-paint-method/'

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
			drawSquareMouseUp: false,
			drawPreview: false
		}
	}

	handleChange = (name, value) => this.setState({[name]: value})

	handleOnMouseDown = e => {
		const canvas = document.getElementById("canvas");
		const { top, left } = canvas.getBoundingClientRect();
		const { clientX, clientY } = e;
		const { method } = this.props.state.paintMethod

		this.setState({
			method,
			line: [[clientX, clientY]],
			top, left
		});
	}

	handleOnMouseUp = () => {

		const method = this.state.method

		this.setState({ method: "" })

		if (method === types.drawLine) {
			return this.setState({ drawing: false })
		}
		else if (method === types.drawSquare) {
			this.setState({ drawSquareMouseUp: true, drawPreview: false })
			return this.drawSquare()
		}
	}

	getPath = e => {
		const { clientX, clientY } = e;
		this.setState({line: [...this.state.line, [clientX, clientY]]});
		this.handleMethod();
	}

	handleMethod = () => {
		if (this.props.state.paintMethod === types.drawLine) {
			return this.drawLine()
		};
	}

	drawLine = () => {
		if (!this.state.line[0]) return;
		this.setState({drawing: true})
		const ctx = this.refs.canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(this.state.line[0][0] - this.state.left, this.state.line[0][1] - this.state.top);
		this.state.line.forEach(point => {
			ctx.lineTo(point[0] - this.state.left, point[1] - this.state.top);
			ctx.strokeStyle = this.props.color;
			ctx.lineWidth = this.props.brushSize;
			ctx.stroke();
		});

		this.setState({ drawing: false})
	}

	drawPreview = () => {
		const { left, top, right, bottom } = this.state.previewCoords;
		const width = Math.abs(left - right);
		const height = Math.abs(top - bottom);

		const style = {
			fill: "rgb(0,0,255)",
			strokeWidth: 3,
			stroke: "rgb(0,0,0)",
		}

		const svgStyle = {
			position: "fixed",
			top: top - this.state.top,
			left: left - this.state.left,
		}

		return <svg style={svgStyle} width={width} height={height}>
			<rect width={width} height={height} style={style} />
		</svg>
	}

	drawSquare = () => {
		const ctx = this.refs.canvas.getContext('2d');

		const left = this.state.line[0][0] - this.state.left
		const top = this.state.line[0][1] - this.state.top
		const right = this.state.line[this.state.line.length - 1][0] - this.state.left
		const bottom = this.state.line[this.state.line.length - 1][1] - this.state.top

		this.setState({previewCoords: {left, top, right, bottom}});

		if (!this.state.drawSquareMouseUp) return;

		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.strokeStyle = this.props.color;
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
				{ this.state.drawPreview ? this.drawPreview() : null }
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

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(Canvas)