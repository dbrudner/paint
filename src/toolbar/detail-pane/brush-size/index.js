import React, { Component } from 'react';
import BrushSizeDot from './brush-size-dot'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeBrushSize } from "../../../redux/get-brush-size";
import * as types from "../../../redux/constants"
const brushes = {
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-around"
}

const BrushesWindow = props => {
	return <div>
		<div style={brushes}>
			<BrushSizeDot closeBrushWindow={props.closeBrushWindow} handleChange={props.handleChange} size="6"/>
			<BrushSizeDot closeBrushWindow={props.closeBrushWindow} handleChange={props.handleChange} size="5"/>
			<BrushSizeDot closeBrushWindow={props.closeBrushWindow} handleChange={props.handleChange} size="4"/>
			<BrushSizeDot closeBrushWindow={props.closeBrushWindow} handleChange={props.handleChange} size="3"/>
			<BrushSizeDot closeBrushWindow={props.closeBrushWindow} handleChange={props.handleChange} size="2"/>
			<BrushSizeDot closeBrushWindow={props.closeBrushWindow} handleChange={props.handleChange} size="1"/>
		</div>
	</div>
}

class BrushSize extends Component {
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

function mapStateToProps(state) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		changeBrushSize
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BrushSize)