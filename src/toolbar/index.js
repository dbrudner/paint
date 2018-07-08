import React, { Component } from 'react';
import ColorPicker from './color-picker';
import BrushSize from './brush-size';
import styled from 'styled-components';
import { Button } from './button';

const ToolBarContainer = styled.div`
	width: 39px;
	height: 0;
	padding: 2px;
	background-color: rgb(191, 191, 191);
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	flex-wrap: wrap;
`

class ToolBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "",
			top: "100px",
			left: "100px",
			dragBarX: 0,
			dragBarY: 0
		}
	}

	handleChange = (name, value) => this.setState({[name]: value})

	render() {

		// const style = {
		// 	width: "100px",
		// 	height: "484px",
		// 	padding: "2px",
		// 	paddingTop: "25px",
		// 	backgroundColor: "rgb(191, 191, 191)",
		// }
		// return (
		// 	<div style={style} >
		// 		<ColorPicker getColor={this.props.handleChange} color={this.state.color} />
		// 		<BrushSize handleChange={this.props.handleChange} />
		// 	</div>
		// )

		return (
			<ToolBarContainer>
				<Button></Button>
				<Button right></Button>
				<Button></Button>
				<Button right></Button>
				<Button></Button>
				<Button right></Button>
				<Button></Button>
				<Button right></Button>
				<Button></Button>
				<Button right></Button>
				<Button></Button>
				<Button right></Button>
				<Button></Button>
				<Button right></Button>
				<Button></Button>
				<Button right></Button>
			</ToolBarContainer>
		)
	}
}

export default ToolBar;