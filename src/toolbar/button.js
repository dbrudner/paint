import styled from 'styled-components'

export const Button = styled.button`
	padding: 0;
	margin: 0;
	height: 16px;
	width: 16px;
	background-color: rgb(191, 191, 191);
	border-top: 1px solid white;
	border-left: 1px solid white;
	border-right: 1px solid gray;
	border-bottom: 1px solid gray;
	display: block;

	:active {
		border: none;
		border-top: 1px solid gray;
		border-left: 1px solid gray;
		border-right: 1px solid white;
		border-bottom: 1px solid white
	}

	:focus {
		outline: none;
		background-color: white;
		border-top: 1px solid gray;
		border-right: 1px solid white;
		border-bottom: 1px solid white;
		border-left: 1px solid gray;
	}
`