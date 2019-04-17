import React from 'react';

import styled from 'styled-components';

const ContainerStyled = styled.div`

	display: flex;
	flex-direction: column;
	background: #E7EEED;
	width: 100%;
	margin-top: 100px;
	padding: 0 50px;
`;

const Container = ({children}) => {
	return (
		<ContainerStyled>
			{children}
		</ContainerStyled>
	);
};

export default Container;
