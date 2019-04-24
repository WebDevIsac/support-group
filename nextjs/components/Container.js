import React from 'react';

import styled from 'styled-components';

const ContainerStyled = styled.div`

	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	background: var(--cloud-white);
	margin-top: 100px;
	padding: 0;

	.image-placement {
		height: 900px;
		margin-top: 100px;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.text-placement {
		margin-top: 50px;
		padding: 30px;
	}

	img {
		display: flex;
		align-content: center;
		width: 300px;
	}

	@media only screen and (max-width: 768px) {
		margin-top: 72px;


		img {
			display: flex;
			align-content: center;
			width: 200px;
		}

		.image-placement {
			height: 900px;
			margin-top: 80px;
			display: flex;
			align-items: center;
			flex-direction: column;
		}

		.text-placement {
			margin-top: 20px;
			padding: 30px;
	}

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
