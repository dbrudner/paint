import React from 'react';
import styled from "styled-components";

const Nav = styled.div`
	margin: 0;
	padding: 0;
	background-color: rgb(191, 191, 191);
	display: flex;
	justify-content: left;

	div {
		margin: 0;
		font-family: sans-serif;
		font-size: 10px;
		padding: 5px;

		:hover {
			cursor: default;
			background-color: #00008f;
			color: white;
		}
	}
`


const Navbar = () => {
	return (
		<Nav>
			<div><u>F</u>ile</div>
			<div><u>E</u>dit</div>
			<div><u>V</u>iew</div>
			<div><u>I</u>mage</div>
			<div><u>O</u>ptions</div>
			<div><u>H</u>elp</div>
		</Nav>
	)
}

export default Navbar;