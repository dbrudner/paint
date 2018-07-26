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
	font-size: ${props => `${props.fontSize}px`};
	font-family: "times new roman";
	border: ${props => props.active ? "none" : ""};
	border-top: ${props => props.active ? "1px solid gray" : ""};
	border-left: ${props => props.active ? "1px solid gray" : ""};
	border-right: ${props => props.active ? "1px solid white" : ""};
	border-bottom: ${props => props.active ? "1px solid white" : ""};
	background-color: ${props => props.active ? "white" : ""};

	:active {
		border-top: ${props => !props.active ? "1px solid gray" : ""};
		border-left: ${props => !props.active ? "1px solid gray" : ""};
		border-right: ${props => !props.active ? "1px solid white" : ""};
		border-bottom: ${props => !props.active ? "1px solid white" : ""};
	}

	:focus {
		outline: none;
		background-color: white;
		border-top: ${props => !props.active ? "1px solid gray" : ""};
		border-left: ${props => !props.active ? "1px solid gray" : ""};
		border-right: ${props => !props.active ? "1px solid white" : ""};
		border-bottom: ${props => !props.active ? "1px solid white" : ""};
	}
`

export const Button2 = styled.button`
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
	font-size: ${props => `${props.fontSize}px`};
	font-family: "times new roman";
	border: ${props => props.active ? "none" : ""};
	border-top: ${props => props.active ? "1px solid gray" : ""};
	border-left: ${props => props.active ? "1px solid gray" : ""};
	border-right: ${props => props.active ? "1px solid white" : ""};
	border-bottom: ${props => props.active ? "1px solid white" : ""};
	background-color: ${props => props.active ? "white" : ""};
`
