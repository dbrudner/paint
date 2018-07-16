import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as types from '../redux/constants';
import TextToolbar from "./text-toolbar"


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
		cursor: ${props => props.text ? "text" : null};
	}
`

class Canvas extends Component {

	constructor(props) {
		super(props);
		this.state = {
			drawing: false,
			line: [],
			lines: [],
			drawSquareMouseUp: false,
			drawPreview: false,
			showTextToolbar: false,
			repositionTextToolbar: false,
			textToolbarMounted: false
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


		if (method === types.drawLine) {
			return this.setState({drawing: true})
		}

		if (method === types.drawSquare) {
			return this.setState({drawPreview: true})
		}

		if (method === types.eraser) {
			return this.setState({drawing: true})
		}

		if (method === types.text && !this.state.textToolbarMounted) {
			return this.setState({showTextToolbar: true, x: clientX, y: clientY, textToolbarMounted: true })
		}
	}

	handleOnMouseUp = e => {
		const method = this.props.state.paintMethod

		this.setState({ method: "" })

		if (method === types.drawLine) {
			return this.setState({ drawing: false })
		}
		if (method === types.drawSquare) {
			this.setState({ drawSquareMouseUp: true, drawPreview: false })
			return this.drawSquare()
		}

		if (this.state.repositionTextToolbar) {
			console.log("HEY");
			this.setState({repositionTextToolbar: false})
		}
	}

	getPath = e => {
		const { clientX, clientY } = e;
		this.setState({line: [...this.state.line, [clientX, clientY]]});

		if (this.props.state.paintMethod === types.drawLine && this.state.drawing) {
			return this.drawLine()
		};

		if (this.state.repositionTextToolbar) {
			this.repositionTextToolbar(e);
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
			ctx.lineWidth = this.props.brushSize;
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
			top: top - this.state.top,
			left: left - this.state.left,
			opacity: .3
		}

		return <svg style={svgStyle} width={width} height={height}>
			<rect width={width} height={height} style={style} />
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

	repositionTextToolbar = e => {
		if (!this.state.repositionTextToolbar) return
		const { clientX, clientY } = e;
		
		this.setState({
			x: clientX,
			y: clientY
		})
	}

	render() {

		const { showTextToolbar, x, y } = this.state

		return (
			<Container text={ this.props.state.paintMethod === types.text }>
				{ this.state.drawPreview ? this.drawPreview() : null }
				{ this.state.showTextToolbar  ? <TextToolbar repositionToolbar={() => this.setState({ repositionTextToolbar: !this.state.repositionTextToolbar })} x={x} y={y} /> : null }
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