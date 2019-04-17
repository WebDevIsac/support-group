import React from 'react';
import styled from 'styled-components';

const LoadingStyled = styled.div`
	z-index: 10;
	position: fixed;
	height: 100vh;
	width: 100vw;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: fade 3.5s ease forwards;
	

	@keyframes fade {
		0% {
			opacity: 1;
		}

		70% {
			opacity: 1;
		}

		100% {
			opacity: 0;
			display: none;
		}
	}
`;

const Loading = () => {
	return (
		<LoadingStyled>
			<video width="320px" height="200px" autoPlay>
				<source src="../static/data/loading.mp4" type="video/mp4"/>
			</video>
		</LoadingStyled>
	);
};

export default Loading;