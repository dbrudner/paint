import React from 'react';
import styled from "styled-components";
import Swatch from "./swatch";

const ActiveSwatchContainer = styled.div`
	background-color: white;
	border-top: 1px solid gray;
	border-right: 1px solid white;
	border-bottom: 1px solid white;
	border-left: 1px solid gray;
	height: 28px;
	width: 28px;
	position: relative;
`

const ActiveSwatch = props => {

	const activeSwatchStyle = {
		position: "absolute",
		left: 5,
		top: 5,
		zIndex: 2
	}

	const passiveSwatchStyle = {
		position: "absolute",
		left: 10,
		top: 10,
		zIndex: 1
	}


	return (
		<ActiveSwatchContainer>
			<div style={activeSwatchStyle}>
				<Swatch flat color={props.activeColor} />
			</div>
			<div style={passiveSwatchStyle}>
				<Swatch flat color="white" />
			</div>
		</ActiveSwatchContainer>
	)
}

export default ActiveSwatch;