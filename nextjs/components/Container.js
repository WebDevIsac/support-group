import React from 'react';

import styled from 'styled-components';

const ContainerStyled = styled.div`

	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	/* width: 100vh;
	height: 100%; */
	background: #E7EEED;
	margin-top: 100px;
	padding: 0 100px;

`;

const Container = ({children}) => {
	return (
		<ContainerStyled>
			{children}
		</ContainerStyled>
	);
};

export default Container;
