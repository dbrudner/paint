import React, {Component} from 'react';
import ColorPicker from './color-picker'
import BrushSize from './brush-size'
import DragBar from './drag-bar';

// const ToolBar = props => {
// 	return (
// 		<div>
// 			<ColorPicker getColor={props.handleChange} color={props.color} />
// 		</div>
// 	)



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
			backgroundColor: "rgb(191, 191, 191)",
		}
		return (
			<div style={style} >
				<ColorPicker getColor={this.props.handleChange} color={this.state.color} />
				<BrushSize handleChange={this.props.handleChange} />				
			</div>
		)
	}
}
 
export default ToolBar;