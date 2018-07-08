import React, { Component } from 'react';
import BrushSizeDot from './brush-size-dot'

const style = {
	border: "1px solid black",
	borderRadius: "3px",
	margin: "10px",
	padding: "10px",
	width: "150px",
}

const brushes = {
	display: "flex",
	justifyContent: "space-around"
}

export default class BrushSize extends Component {
	constructor(props) {
		super(props)
		this.state = {open: false}
	}

	handleChange = size => this.props.handleChange("brushSize", size)

	render() {
		return (
			<div>
				<button onClick={() => this.setState({open: !this.state.open})}>
					<i className="fas fa-paint-brush"></i>
				</button>
				<div style={style}>
					<p>Pick a size</p>
					<div style={brushes}>
						<BrushSizeDot handleChange={this.handleChange} size="20"/>
						<BrushSizeDot handleChange={this.handleChange} size="15"/>
						<BrushSizeDot handleChange={this.handleChange} size="10"/>
						<BrushSizeDot handleChange={this.handleChange} size="5"/>
						<BrushSizeDot handleChange={this.handleChange} size="2"/>
					</div>
				</div>
			</div>
		)
	}
}