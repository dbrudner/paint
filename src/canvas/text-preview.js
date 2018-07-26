import React, { Component } from 'react';
import styled from "styled-components"
import ReactDOM from 'react-dom';

const Input = styled.textarea`
	position: absolute;
	left: ${props => `${props.left}px`};
	top: ${props => `${props.top}px`};
	height: ${props => props.textStyle.fontSize + "px"};
	font-size: ${props => props.textStyle.fontSize + "px"};
	display: block;
	background-color: transparent;
	text-shadow: 0 0 0 gray;
	border: 1px dashed blue;
	font-weight: ${props => props.textStyle.bold ? 700 : 400};
	font-style: ${props => props.textStyle.italic ? "italic" : ""};
	text-decoration: ${props => props.textStyle.underline ? "underline" : ""};
	color: ${props => props.color};

	&:focus {
		outline: none;
	}
`

class TextPreview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		}
	}

	// componentDidMount() {
	// 	this.refs.input.findDOMNode().focus();
	// }

	render() {
		return <Input {...this.props} ref="input" value={this.state.value} onChange={e => this.setState({ value: e.target.value })} />
	}
}

export default TextPreview;