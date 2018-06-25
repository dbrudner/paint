import React, { Component } from 'react';
import Canvas from './canvas';
import ColorPicker from './color-picker';

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			color: "",
			drawingLine: false,
			line: [], 
			lines: []
		}
	}

	handleChange = (name, value) => this.setState({[name]: value})

	handleOnMouseDown = e => {
		this.setState({drawingLine: true})
	}

	handleOnMouseUp = e => {
		this.setState({drawingLine: false, lines: [...this.state.lines, this.state.line]})
	}

	drawLine = e => {
		if (!this.state.drawingLine) return;
		
		const { clientX, clientY } = e;

		this.setState({line: [...this.state.line, [clientX, clientY]]})
	}

	render() {
		return (
			<div>
				<h1>Paint</h1>
				<Canvas lines={this.state.lines} drawLine={this.drawLine} handleOnMouseUp={this.handleOnMouseUp} handleOnMouseDown={this.handleOnMouseDown} />
				<ColorPicker getColor={this.handleChange} color={this.state.color} />
			</div>
		);
	}
}

export default App;
