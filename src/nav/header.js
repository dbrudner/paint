import React from 'react';
import styled from 'styled-components'

const Head = styled.div`

	background-color: #0000aa;
	padding: 2px 4px 3px 4px;
	h1 {
		font-size: 13px;
		margin: 0;
		color: white;
	}
`

const Header = () => {
	return (
		<Head>
			<h1>untitled - Paint</h1>
		</Head>
	)
}

export default Header;