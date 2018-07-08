import React from 'react';
import styled from 'styled-components';
import ColorPicker from './color-picker';
import CurrentColor from './current-color';

const FooterContainer = styled.div`
	padding: 10px;
`

const Footer = props => {
	return (
		<FooterContainer>
			<CurrentColor color={props.color} />
			<ColorPicker getColor={props.handleChange} />
		</FooterContainer>
	)
}

export default Footer;