import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from './button';
import DetailPane from './detail-pane/'
import ColorPicker from '../footer/color-picker'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { changePaintMethod,
	eraser,
	drawLine,
	drawSquare, } from "../get-paint-method/"

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
			dragBarY: 0,
			selected: null
		}
	}

	handleChange = (name, value) => {
		this.setState({[name]: value})
		if (name === "selected") {
			this.props.getMethod(value);
		}
	}

	render() {
		return (
			<ToolBarContainer>
				<Button><i class="fas fa-bezier-curve"></i></Button>
				<Button onClick={() => this.props.changePaintMethod(drawSquare)}><i class="fas fa-vector-square"></i></Button>
				<Button onClick={() => this.props.changePaintMethod(eraser)}><i className="fas fa-eraser"></i></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button onClick={() => this.props.changePaintMethod(drawLine)}><i className="fas fa-paint-brush"></i></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<ColorPicker getColor={this.props.handleChange} />
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
    return bindActionCreators({changePaintMethod}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar)