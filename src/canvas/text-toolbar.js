import React, { Component } from 'react';
import styled from "styled-components";
import { Button2 } from "../toolbar/button"
import { changeTextStyle, fontSizes } from "../redux/constants"
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeFontStyle } from "../redux/get-text-style";

const Container = styled.div`
	width: 200px;
	height: 44px;
	background-color: #0000aa;
	position: absolute;
	top: ${props => `${props.y}px`};
	left: ${props => `${props.x}px`};
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
	font-size: 8px;
	width: ${props => props.width};
	height: 15px;
	margin-left: ${props => props.margin || "2px"};
	margin-right: ${props => props.margin ? "5px" : ""};
`

const Datalist = styled.select`
	font-size: 8px;
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

	renderDataList = () => {
		return fontSizes.map(size => <option key={size} value={size}>{size}</option>)
	}

	changeFontStyle = style => {
		const currentStyle = this.props.state.textStyle;
		const newStyle = {...currentStyle, [style]: !currentStyle[style]}
		this.props.changeFontStyle(newStyle);
	}

	changeFont = font => {
		const currentStyle = this.props.state.textStyle;
		const newStyle = {...currentStyle, font}
		this.props.changeFontStyle(newStyle);
	}

	changeFontSize = fontSize => {
		const currentStyle = this.props.state.textStyle;
		const newStyle = {...currentStyle, fontSize}
		this.props.changeFontStyle(newStyle);
	}

	render() {

		const { bold, italic, underline } = this.props.state.textStyle;

		console.log({ bold, italic, underline })

		const { x, y, repositionToolbar, mouseUp } = this.props;

		const reposition = e => {
			const { clientX, clientY } = e;
			const { offsetX, offsetY } = this.state;

			this.setState({ currentX: clientX - offsetX, currentY: clientY - offsetY })
		}

		const getOffset = e => {
			const el = document.getElementById("textbar")
			const { top, left, bottom, right } = el.getBoundingClientRect();
			const { clientX, clientY } = e;
			this.setState({ offsetX: clientX - left, offsetY: clientY - top})
		}

		return (
			<Container id="textbar" draggable="true" onDragStart={getOffset} onDragEnd={reposition} x={this.state.currentX || x} y={this.state.currentY || y}>
				<h2>Fonts</h2>
				<div>
					<Select onChange={e => this.changeFont(e.target.value)} width="90px">
						<option value="Times New Roman">Times New Roman</option>
						<option value="Arial">Arial</option>
					</Select>
					<Datalist onChange={e => this.changeFontSize(e.target.value)} margin="5px" width="34px">
						{this.renderDataList()}
					</Datalist>
					<Button2 active={bold} onClick={() => this.changeFontStyle("bold")} fontSize="8"><strong>B</strong></Button2>
					<Button2 active={italic} onClick={() => this.changeFontStyle("italic")} fontSize="8"><em>I</em></Button2>
					<Button2 active={underline} onClick={() => this.changeFontStyle("underline")} fontSize="8"><span style={{textDecoration: "underline"}}>u</span></Button2>
				</div>
			</Container>
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
		changeFontStyle
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TextToolbar)
