import React, { Component } from 'react';
import Canvas from './canvas';
import ColorPicker from './color-picker';
import Toolbar from './toolbar';

const style = {
	backgroundColor: "#dedede",
	width: "100%",
	height: "100vh"
}

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			color: "",
			
		}
	}

	handleChange = (name, value) => this.setState({[name]: value})

	render() {
		return (
			<div style={style}>
				<h1 style={{margin: 0}}>Paint</h1>
				<Canvas color={this.state.color} />
				<Toolbar handleChange={this.handleChange} />
			</div>
		);
		}
	}

export default App;
