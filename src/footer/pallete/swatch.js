import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { doChangeColor } from "../../redux/color";
import * as types from "../../redux/constants"
import StyledSwatch from "./styled-swatch";

class Swatch extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() {
		const { color, flat, changeColor } = this.props;

		return <StyledSwatch onClick={() => changeColor(color)} flat={flat} color={color} />
	}
}


function mapStateToProps(state) {
	return {
		state
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeColor: doChangeColor
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Swatch)