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
	padding: 0 96px;

	@media only screen and (max-width: 768px) {
		margin-top: 80px;
		padding: 0 16px;
	}
`;

const Container = ({children}) => {
	return (
		<ContainerStyled>
			{children}
		</ContainerStyled>
	);
};

export default Container;
