import React, { Component } from 'react';
import styled from 'styled-components';
import BrushSize from './brush-size/'
import Eraser from './eraser/'
import {connect} from 'react-redux';
import * as types from "../../redux/constants"

const DetailPaneContainer = styled.div`
	border-top: 1px solid gray;
	border-left: 1px solid gray;
	border-bottom: 1px solid white;
	border-right: 1px solid white;
	padding: 3px;
	width: 32px;
	margin-top: 5px;
`


class DetailPane extends Component {
	constructor(props) {
		super(props);
	}

	handleChange = (name, value) => this.setState({[name]: value})

	render() {
		const { paintMethod } = this.props.state;

		return (
			<DetailPaneContainer>
				{paintMethod === types.DRAW_LINE ? <BrushSize handleChange={this.props.handleChange}/> : null}
				{paintMethod === types.ERASER ? <Eraser handleChange={this.props.handleChange}/> : null}
			</DetailPaneContainer>
		)
	}
}

function mapStateToProps(state) {
	return {
		state
	}
}

export default connect(mapStateToProps)(DetailPane)