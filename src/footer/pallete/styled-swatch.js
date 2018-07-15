import styled from "styled-components";

export default styled.div`
	border-top: ${props => props.flat ? "1px solid #cacaca" : "1px solid black"};
	border-left: ${props => props.flat ? "1px solid #cacaca" : "1px solid black"};
	border-bottom: 1px solid gray;
	border-right: 1px solid gray;
	width: 12px;
	height: 12px;
	background-color: ${props => props.color};
	margin: ${props => props.flat ? null : "2px"}
`