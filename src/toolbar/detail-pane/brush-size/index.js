import React, { Component } from 'react';
import BrushSizeDot from './brush-size-dot'

const brushes = {
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-around"
}

const BrushesWindow = props => {
	return <div>
		<div style={brushes}>
			<BrushSizeDot closeBrushWindow={props.closeBrushWindow} size="6"/>
			<BrushSizeDot closeBrushWindow={props.closeBrushWindow} size="5"/>
			<BrushSizeDot closeBrushWindow={props.closeBrushWindow} size="4"/>
			<BrushSizeDot closeBrushWindow={props.closeBrushWindow} size="3"/>
			<BrushSizeDot closeBrushWindow={props.closeBrushWindow} size="2"/>
			<BrushSizeDot closeBrushWindow={props.closeBrushWindow} size="1"/>
		</div>
	</div>
}

export default class BrushSize extends Component {
	constructor(props) {
		super(props)
		this.state = {open: false}
	}

	closeBrushWindow = () => this.setState({open: !this.state.open})

	handleChange = (name, value) => this.props.handleChange(name, value)
	
	render() {
		return (
			<BrushesWindow closeBrushWindow={this.closeBrushWindow} handleChange={this.handleChange}/>
		)
	}
}