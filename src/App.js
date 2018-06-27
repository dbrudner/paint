import React, { Component } from 'react';
import Canvas from './canvas';
import ColorPicker from './color-picker';

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
			<div>
				<h1>Paint</h1>
				<Canvas color={this.state.color} />
				<ColorPicker getColor={this.handleChange} color={this.state.color} />
			</div>
		);
	}
}

export default App;
