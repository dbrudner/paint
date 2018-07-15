import React, { Component } from 'react';
import styled from "styled-components";
import { Button } from "../toolbar/button"

const Container = styled.div`
	width: 158px;
	height: 44px;
	background-color: #0000aa;
	position: absolute;
	top: ${props => `${props.y + 30}px`};
	left: ${props => `${props.x + 20}px`};
	border: 2px solid;
	border-bottom-color: #535353;
    border-right-color: #535353;
    border-left-color: #dbdbdb;
    border-top-color: #dbdbdb;

	h2 {
		margin: 3px 0 3px 5px;
		font-size: 8px;
		color: white;
	}

	div {
		padding-top: 5px;
		display: flex;
		justify-content: center;
		background-color: rgb(191,191,191);
		height: 25px;
	}
`

const Select = styled.select`
	font-size: 6px;
	width: ${props => props.width};
	height: 15px;
	margin-left: ${props => props.margin || "2px"};
	margin-right: ${props => props.margin ? "5px" : ""};	
`

class TextToolbar extends Component{
	constructor(props) {
		super(props);
		this.state = {
			repositioning: false
		}
	}

	reposition = e => {
		const newX = e.clientX;
		const newY = e.clientY;
		const { newX, newY } = this.state;

	}

	render() {
		const { x, y } = this.props;

		return (
			<Container x={x} y={y}>
				<h2 onMouseUp={e => this.reposition(e)} onMouseDown={e => this.setState({ reposition: true, oldX: e.clientX, oldY: e.clientY })}>Fonts</h2>
				<div>
					<Select width="60px"></Select>
					<Select margin="5px" width="30px"></Select>
					<Button></Button>
					<Button></Button>
					<Button></Button>
				</div>
			</Container>
		)
	}
	
}

export default TextToolbar;