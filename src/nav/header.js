import React from 'react';
import styled from 'styled-components'

const Head = styled.div`

	background-color: #808080;
	padding: 2px 4px 3px 4px;
	h1 {
		font-size: 13px;
		margin: 0;
		color: #bcbcbc;
	}
`

const Header = () => {
	return (
		<Head>
			<h1>Paint</h1>
		</Head>
	)
}
 
export default Header;