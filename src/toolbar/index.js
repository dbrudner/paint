import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from './button';
import DetailPane from './detail-pane/'
import ColorPicker from '../footer/color-picker'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { doChangePaintMethod } from "../redux/paint-method";
import { doChangeColor } from "../redux/color";
import { doUpdatePalette } from "../redux/palette";
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
		this.props.doChangePaintMethod(types.DRAW_LINE);
	}

	changeColor = color => {
		this.props.changeColor(color);
		this.props.changePalette(color, types.PALETTE_UPDATED)
	}

	render() {
		console.log(this.props);
		return (
			<ToolBarContainer>
				<Button><i className="fas fa-bezier-curve"></i></Button>
				<Button onClick={() => this.props.changePaintMethod(types.DRAW_LINE)}><i className="fas fa-vector-square"></i></Button>
				<Button onClick={() => this.changeToEraser()}><i className="fas fa-eraser"></i></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button onClick={() => this.props.changePaintMethod(types.DRAW_LINE)}><i className="fas fa-paint-brush"></i></Button>
				<Button onClick={() => this.props.changePaintMethod(types.SPRAY_PAINT)}><i className="fas fa-spray-can"></i></Button>
				<Button onClick={() => this.props.changePaintMethod(types.TEXT)}><span style={{fontFamily: "times new roman", fontWeight: 700}}>A</span></Button>
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
		changePaintMethod: doChangePaintMethod,
		changeColor: doChangeColor,
		changePalette: doUpdatePalette
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar)