import React, { Component } from 'react';
import Canvas from './canvas';
import Toolbar from './toolbar';
import ColorPicker from './color-picker';

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
			brushSize: 10
		}
	}

	handleChange = (name, value) => this.setState({[name]: value})

	render() {
		return (		
			<div style={style}>
				<h1 style={{margin: 0}}>Paint</h1>
				<Toolbar handleChange={this.handleChange} getColor={this.handleChange} color={this.state.color} />
				<Canvas brushSize={this.state.brushSize} color={this.state.color} />
			</div>
		);
	}
}

export default App;
