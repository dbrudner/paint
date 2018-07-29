import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as types from '../redux/constants';
import TextToolbar from "./text-toolbar";
import TextPreview from "./text-preview";

const Container = styled.div`
	position: relative;
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
	cursor: crosshair;

	:focus {
		border: none;
	}

	canvas {
		background-color: white;
		cursor: ${props => props.text ? "text" : null};
	}
`

class Canvas extends Component {

	constructor(props) {
		super(props);
		this.state = {
			drawing: false,
			line: [],
			drawSquareMouseUp: false,
			drawPreview: false,
			showTextToolbar: false,
			textToolbarMounted: false,
			text: false,
			snapshots: []
		}
	}

	componentDidMount() {
		const canvas = document.getElementById("canvas");
		const { top, left, bottom, right } = canvas.getBoundingClientRect();
		this.setState({offset: {top, left, bottom, right}})
	}

	handleChange = (name, value) => this.setState({[name]: value})

	handleOnMouseDown = e => {
		const canvas = document.getElementById("canvas");
		const { top, left } = this.state.offset;
		const { clientX, clientY } = e;
		const method = this.props.state.paintMethod

		this.setState({
			line: [[clientX, clientY]],
			top, left
		});

		if (method === types.TEXT && !this.state.textToolbarMounted) {
			return this.setState({ text: true, showTextToolbar: true, x: clientX, y: clientY, textToolbarMounted: true })
		}

		this.setState({ showTextToolbar: false, textToolbarMounted: false })

		if (method === types.DRAW_LINE) {
			return this.setState({ drawing: true })
		}

		if (method === types.DRAW_RECT) {
			return this.setState({ drawPreview: true })
		}

		if (method === types.ERASER) {
			return this.setState({ drawing: true })
		}

		if (method === types.SPRAY_PAINT) {
			return this.setState({ sprayPaint: true })
		}
	}

	handleOnMouseUp = e => {
		const method = this.props.state.paintMethod

		if (method === types.DRAW_LINE) {

			const { line, snapshots } = this.state

			const data = [{...line}]

			const snapshot = {
				method: types.DRAW_LINE,
				data,
				color: this.props.state.color,
				brushSize: this.props.state.brushSize
			}

			this.setState({
				snapshots: [...snapshots, snapshot]
			})

			return this.setState({ drawing: false })
		}

		if (method === types.SPRAY_PAINT) {
			return this.setState({ sprayPaint: false })
		}

		if (method === types.DRAW_RECT) {
			this.setState({ drawSquareMouseUp: true, drawPreview: false })
			return this.drawSquare()
		}
	}

	getPath = e => {
		const { clientX, clientY } = e;
		this.setState({line: [...this.state.line, [clientX, clientY]]});

		if (this.props.state.paintMethod === types.DRAW_LINE && this.state.drawing) {
			return this.drawLine()
		};

		if (this.props.state.paintMethod === types.SPRAY_PAINT && this.state.sprayPaint) {
			return this.spray();
		}
	}

	spray = () => {
		const ctx = this.refs.canvas.getContext('2d');

		if (!this.state.line[0]) return;

		const x = this.state.line[this.state.line.length - 1][0] - this.state.left
		const y = this.state.line[this.state.line.length - 1][1] - this.state.top

		for (let i = 0; i<20; i++) {
			const randomX = x + (Math.random() * 50) - 25
			const randomY = y + (Math.random() * 50) - 25

			ctx.fillRect(randomX, randomY, 3, 3);
			ctx.fillStyle = this.props.state.color;
		}
	}

	drawLine = () => {
		if (!this.state.line[0]) return;
		const ctx = this.refs.canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(this.state.line[0][0] - this.state.left, this.state.line[0][1] - this.state.top);
		this.state.line.forEach(point => {
			ctx.lineTo(point[0] - this.state.left, point[1] - this.state.top);
			ctx.strokeStyle = this.props.state.color;
			ctx.lineWidth = this.props.state.brushSize;
			ctx.stroke();
		});
	}

	reDrawLine = () => {
		if (!this.state.line[0]) return;
		const ctx = this.refs.canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(this.state.line[0][0] - this.state.left, this.state.line[0][1] - this.state.top);
		this.state.line.forEach(point => {
			ctx.lineTo(point[0] - this.state.left, point[1] - this.state.top);
			ctx.strokeStyle = this.props.state.color;
			ctx.lineWidth = this.props.state.brushSize;
			ctx.stroke();
		});
	}

	drawPreview = () => {

		const { offset } = this.state;

		const left = this.state.line[0][0] - this.state.left + offset.left
		const top = this.state.line[0][1] - this.state.top + offset.top
		const right = this.state.line[this.state.line.length - 1][0] - this.state.left
		const bottom = this.state.line[this.state.line.length - 1][1] - this.state.top

		const width = Math.abs(left - right);
		const height = Math.abs(top - bottom);

		const style = {
			fill: "rgb(0,0,255)",
			strokeWidth: 3,
			stroke: "rgb(0,0,0)",
		}

		const svgStyle = {
			position: "fixed",
			opacity: .3,
			backgroundColor: "green"
		}

		const path = `M${top} ${left} l${top} ${right} l${bottom} ${right} l${bottom} ${left} l${top} ${left}`

		return <svg style={svgStyle}>
			<path style={style} d={path} fill="purple"/>
		</svg>
	}

	drawSquare = () => {
		const left = this.state.line[0][0] - this.state.left
		const top = this.state.line[0][1] - this.state.top
		const right = this.state.line[this.state.line.length - 1][0] - this.state.left
		const bottom = this.state.line[this.state.line.length - 1][1] - this.state.top
		const ctx = this.refs.canvas.getContext('2d');

		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.strokeStyle = this.props.state.color;
		ctx.moveTo(left, top);
		ctx.lineTo(right, top);
		ctx.lineTo(right, bottom);
		ctx.lineTo(left, bottom);
		ctx.lineTo(left, top);
		ctx.stroke();
	}

	drawText = () => {
		this.setState({showTextToolbar: true})
	}

	undo = e => {
		if (e.keyCode === 90 && e.ctrlKey) {
			this.setState({ snapshots: [...this.state.snapshots.slice(0, this.state.snapshots.length - 1)] })
			this.reDrawCanvas();
		}
	}

	clearCanvas() {
		const ctx = this.refs.canvas.getContext('2d');
		const canvas = document.getElementById("canvas");
		const { top, left, bottom, right } = canvas.getBoundingClientRect();
		const width = right - left;
		const height = bottom - top;

		ctx.clearRect(0, 0, width, height);
	}

	reDrawCanvas = () => {
		this.clearCanvas()
		const ctx = this.refs.canvas.getContext('2d');
		console.log({snapshots: this.state.snapshots});
		this.state.snapshots.forEach(snapshot => {
			if (snapshot.method === types.DRAW_LINE) {
				console.log("redraw");
				snapshot.data.forEach(point => {

					const { color, brushSize } = snapshot;

					ctx.lineTo(point[0] - this.state.left, point[1] - this.state.top);
					ctx.strokeStyle = color;
					ctx.lineWidth = brushSize;
					ctx.stroke();
				})
			}
		})
	}

	render() {
		const { showTextToolbar, x, y } = this.state

		return (
			<Container tabIndex="0" onKeyDown={this.undo} text={ this.props.state.paintMethod === types.TEXT }>
				{ this.state.drawPreview && this.drawPreview() }
				{ this.state.showTextToolbar && <TextToolbar offsetX={100} offsetY={100} x={x} y={y} /> }
				{this.state.text && <TextPreview offsetX={500} offsetY={100} color={this.props.state.color} textStyle={this.props.state.textStyle} /> }
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

const mapStateToProps = state => {
	return {
		state
	}
}

export default connect(mapStateToProps)(Canvas)