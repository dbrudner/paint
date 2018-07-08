import React, { Component } from 'react';
import styled from 'styled-components';
import BrushSize from './brush-size/'

const DetailPaneContainer = styled.div`
	border-top: 1px solid gray;
	border-left: 1px solid gray;
	border-bottom: 1px solid white;
	border-right: 1px solid white;
	padding: 3px;
`


class DetailPain extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return (
			<DetailPaneContainer>
				<BrushSize handleChange={this.props.handleChange}/>
			</DetailPaneContainer>
		)
	}
}

export default DetailPain;