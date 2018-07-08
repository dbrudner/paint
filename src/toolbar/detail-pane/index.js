import React, { Component } from 'react';
import styled from 'styled-components';
import BrushSize from './brush-size/'
import Eraser from './eraser/'

const DetailPaneContainer = styled.div`
	border-top: 1px solid gray;
	border-left: 1px solid gray;
	border-bottom: 1px solid white;
	border-right: 1px solid white;
	padding: 3px;
	width: 32px;
	margin-top: 5px;
`


class DetailPain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pane: "eraser"
		}
	}
	render() {
		return (
			<DetailPaneContainer>
				{this.state.pane === "brushSize" ? <BrushSize handleChange={this.props.handleChange}/> : null}
				{this.state.pane === "eraser" ? <Eraser handleChange={this.props.handleChange}/> : null}				
			</DetailPaneContainer>
		)
	}
}

export default DetailPain;