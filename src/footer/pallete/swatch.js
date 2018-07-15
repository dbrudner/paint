import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeColor } from "../../redux/get-color";
import * as types from "../../redux/constants"
import StyledSwatch from "./styled-swatch";

class Swatch extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() {
		return <StyledSwatch flat={this.props.flat} color={this.props.color} />
	}
}


function mapStateToProps(state) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		changeColor
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Swatch)