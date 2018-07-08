import React, { Component } from 'react';
import Canvas from './canvas';
import Toolbar from './toolbar';
import ColorPicker from './color-picker';
import Navbar from './navbar';
import styled from 'styled-components';
import Header from './header';

const style = {
	backgroundColor: "#dedede",
	
}

const Window = styled.div`
	margin: 50px;
	border: 2px solid;
	border-bottom-color: #535353;
	border-right-color: #535353;
	border-left-color: #dbdbdb;
	border-top-color: #dbdbdb;
	background-color: #bfbfbf;
`

const AppContainer = styled.div`
	display: flex;
	justify-content: left;
`

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
			<Window>
				<Header />
				<Navbar />
				<AppContainer>
					<Toolbar handleChange={this.handleChange} getColor={this.handleChange} color={this.state.color} />
					<Canvas brushSize={this.state.brushSize} color={this.state.color} />
				</AppContainer>
			</Window>
		);
	}
}

export default App;
