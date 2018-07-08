import React, { Component } from 'react';
import BrushSizeDot from './brush-size-dot'

const style = {
	border: "1px solid black",
	borderRadius: "3px",
	margin: "10px",
	padding: "10px",
	width: "150px",
	backgroundColor: "white",
	zIndex: 5,
	position: "fixed"
}

const brushes = {
	display: "flex",
}

const BrushesWindow = props => {
	return <div style={style}>
		<p>Pick a size</p>
		<div style={brushes}>
			<BrushSizeDot closeBrushWindow={props.closeBrushWindow} handleChange={props.handleChange} size="20"/>
			<BrushSizeDot closeBrushWindow={props.closeBrushWindow} handleChange={props.handleChange} size="15"/>
			<BrushSizeDot closeBrushWindow={props.closeBrushWindow} handleChange={props.handleChange} size="10"/>
			<BrushSizeDot closeBrushWindow={props.closeBrushWindow} handleChange={props.handleChange} size="5"/>
			<BrushSizeDot closeBrushWindow={props.closeBrushWindow} handleChange={props.handleChange} size="2"/>
		</div>
	</div>
}

export default class BrushSize extends Component {
	constructor(props) {
		super(props)
		this.state = {open: false}
	}

	closeBrushWindow = () => this.setState({open: !this.state.open})

	handleChange = (name, value) => {
		console.log(name, value);
		this.props.handleChange(name, value)
	}

	render() {
		return (
			<div>
				<button onClick={() => this.setState({open: !this.state.open})}>
					<i className="fas fa-paint-brush"></i>
				</button>
				{this.state.open ? <BrushesWindow closeBrushWindow={this.closeBrushWindow} handleChange={this.handleChange}/> : null}
			</div>
		)
	}
}