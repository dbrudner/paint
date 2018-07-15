import React from 'react';
import styled from 'styled-components';
import Palette from "./pallete";

const FooterContainer = styled.div`
	padding: 5px;
`

const Footer = props => {
	return (
		<FooterContainer>
			<Palette />
		</FooterContainer>
	)
}

export default Footer;