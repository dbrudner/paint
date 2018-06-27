import React, { Component } from 'react';
import ColorPicker from './color-picker';
import DragBar from './drag-bar';



class ToolBar extends Component {
	constructor(props) {
		super(props);
		this.state = {  
			color: "",
			top: "100px",
			left: "100px",
			dragBarX: 0,
			dragBarY: 0
		}
	}

	handleChange = (name, value) => this.setState({[name]: value})	

	render() { 

		const style = {
			width: "100px",
			height: "484px",
			padding: "2px",
			paddingTop: "25px",
			marginLeft: "20px",
			borderRadius: "5px",
			backgroundColor: "#f3f3f3",
			position: "fixed",
			top: this.state.top,
			left: this.state.bottom
		}
		return (
			<div style={style} >
				<DragBar x={this.state.dragBarX} y={this.state.dragBarY} reposition={this.reposition}/>
				<ColorPicker getColor={this.props.handleChange} color={this.state.color} />
			</div>
		)
	}
}
 
export default ToolBar;