import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { doChangeBrushSize } from "../../../redux/brush-size";
import * as types from "../../../redux/constants";

const Container = styled.button`
	height: 10px;
	width: 10px;
	margin: 0;
	padding: 0;
	background-color: rgb(191,191,191);
	border: none;
	:focus {
		background-color: dodgerblue;
	}
`

const style = {

}

const svg = {
	display: "block",
	margin: "auto"
}

const BrushSizeDot = props => {


	const {size, handleChange } = props

	const getTranslate = size => {
		if (size == 3) {
			return `translateY(-6px)`
		}
		if (parseInt(size) > 2) return `translateY(-${(size - 10) * -1}px)`
		return `translateY(-${(size - 8) * -1}px)`
	}

	const svg = {
		transform: getTranslate(size)
	}

	return (
		<Container onClick={() => props.updateBrushSize(size)} style={style}>
			<svg style={svg} height={size} width={size}>
				<circle cx={size/2} cy={size/2} r={size * .4} fill="black" />
			</svg>
		</Container>

	)
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
		updateBrushSize: doChangeBrushSize
	}, dispatch)
}

export default connect(null, mapDispatchToProps)(BrushSizeDot)