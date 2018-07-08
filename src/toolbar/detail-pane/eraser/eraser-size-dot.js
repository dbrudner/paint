import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
	display: block;
	height: 10px;
	width: 10px;
	margin: auto;
	padding: 0;
	background-color: rgb(191,191,191);
	border: none;
	:focus {
		background-color: dodgerblue;
	}
`

const svg = {
	display: "block",
	margin: "auto"
}

const BrushSizeDot = props => {


	const {size, handleChange } = props

	const getTranslate = size => {
		if (size == 3) {
			console.log(size);
			return `translateY(-6px)`
		}
		if (parseInt(size) > 2) return `translateY(-${(size - 10) * -1}px)`
		return `translateY(-${(size - 8) * -1}px)`
	}

	// console.log(size, getTranslate(size));

	const svg = {
		transform: getTranslate(size)
	}

	const handleClick = size => {
		props.handleChange("brushSize", size)
		props.handleChange("color", "white")
	}

	return (
		<Container onClick={() => handleClick(size)}>
			<svg style={svg} height={size} width={size}>
				<rect width={size} height={size} fill="black" />
			</svg>
		</Container>

	)
}

export default BrushSizeDot;