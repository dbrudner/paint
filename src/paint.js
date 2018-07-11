import React, { Component } from 'react';
import Canvas from './canvas/';
import Toolbar from './toolbar/';
import Navbar from './nav/';
import styled from 'styled-components';
import Header from './nav/header';
import Footer from './footer/';

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

const PaintContainer = styled.div`
	display: flex;
	justify-content: left;
`

class Paint extends Component {

	constructor(props) {
		super(props)

		this.state = {
			color: "",
			brushSize: 10,
			method: "drawLine"
		}
	}

	handleChange = (name, value) => this.setState({[name]: value})

	render() {
		return (		
			<Window>
				<Header />
				<Navbar />
				<PaintContainer>
					<Toolbar getMethod={value => this.handleChange("method", value)} handleChange={this.handleChange} getColor={this.handleChange} color={this.state.color} />
					<Canvas method={this.state.method} brushSize={this.state.brushSize} color={this.state.color} />
				</PaintContainer>
				{/* <Footer handleChange={this.handleChange} /> */}
			</Window>
		);
	}
}

export default Paint;
