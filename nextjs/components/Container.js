import React from 'react';

import styled from 'styled-components';

const ContainerStyled = styled.div`

	display: flex;
	flex-direction: column;
	/* align-items: center; */
	overflow-x: hidden;
	/* width: 100vh; */
	/* height: 100vh; */
	background: #E7EEED;
	margin-top: 100px;
	padding: 0 96px;

	.image-placement {
	height: 900px;
	margin-top: 100px;
	display: flex;
	align-items: center;
	flex-direction: column;
	}

	.content {
	margin-bottom: 80px;
}

	.text-placement {
	padding: 100px;
	}

	img {
	display: flex;
	align-content: center;
	width: 500px;

	}

	@media only screen and (max-width: 768px) {
		margin-top: 80px;
		padding: 0 16px;


		img {
		display: flex;
		align-content: center;
		width: 300px;
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
		padding: 20px;
	}

		.content {
		margin-bottom: 80px;
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
