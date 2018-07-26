import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from './button';
import DetailPane from './detail-pane/'
import ColorPicker from '../footer/color-picker'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { changePaintMethod } from "../redux/get-paint-method";
import { changeColor } from "../redux/get-color";
import { changePalette } from "../redux/get-palette";
import * as types from "../redux/constants";

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
			selected: null
		}
	}

	handleChange = (name, value) => {
		this.setState({[name]: value})
		if (name === "selected") {
			this.props.getMethod(value);
		}
	}

	changeToEraser = () => {
		this.props.changeColor("white");
		this.props.changePaintMethod(types.drawLine);
	}

	changeColor = color => {
		this.props.changeColor(color);
		console.log([color, ...this.props.state.palette.slice(0, this.props.state.palette.length - 1)])
		this.props.changePalette([color, ...this.props.state.palette.slice(0, this.props.state.palette.length - 1)], types.getPalette)
	}

	render() {
		console.log(this.props);
		return (
			<ToolBarContainer>
				<Button><i className="fas fa-bezier-curve"></i></Button>
				<Button onClick={() => this.props.changePaintMethod(types.drawSquare)}><i className="fas fa-vector-square"></i></Button>
				<Button onClick={() => this.changeToEraser()}><i className="fas fa-eraser"></i></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button onClick={() => this.props.changePaintMethod(types.drawLine)}><i className="fas fa-paint-brush"></i></Button>
				<Button onClick={() => this.props.changePaintMethod(types.sprayPaintSelected)}><i className="fas fa-spray-can"></i></Button>
				<Button onClick={() => this.props.changePaintMethod(types.text)}><span style={{fontFamily: "times new roman", fontWeight: 700}}>A</span></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<ColorPicker changeColor={this.changeColor} />
				<DetailPane selected={this.state.selected} handleChange={this.props.handleChange}/>
			</ToolBarContainer>
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
		changePaintMethod,
		changeColor,
		changePalette
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar)