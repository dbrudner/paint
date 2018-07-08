import React, { Component } from 'react';
import EraserSizeDot from './eraser-size-dot'

const brushes = {
	
}

const Erasers = props => {
	return <div>
		<div style={brushes}>
			<EraserSizeDot closeBrushWindow={props.closeBrushWindow} handleChange={props.handleChange} size="6"/>
			<EraserSizeDot closeBrushWindow={props.closeBrushWindow} handleChange={props.handleChange} size="4"/>
			<EraserSizeDot closeBrushWindow={props.closeBrushWindow} handleChange={props.handleChange} size="2"/>
		</div>
	</div>
}

export default class BrushSize extends Component {
	constructor(props) {
		super(props)
		this.state = {open: false}
	}


	handleChange = (name, value) => this.props.handleChange(name, value)
	
	render() {
		return (
			<Erasers handleChange={this.handleChange}/>
		)
	}
}