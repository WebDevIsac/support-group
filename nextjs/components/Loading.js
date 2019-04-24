import React, {useState} from 'react';
import styled from 'styled-components';

const LoadingStyled = styled.div`
	z-index: 10;
	position: fixed;
	height: 110vh;
	width: 100vw;
	display: flex;
	background: white;
	justify-content: center;
	align-items: center;
	margin-top: -100px;
	/* animation: fade 3.5s ease forwards; */

	img {
		width: 320px;
		height: 200px;
	}
	
	video {
		width: 320px;
		height: 200px;
	}

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

const Loading = ({loaded}) => {
	return (
		<LoadingStyled style={{display: loaded ? 'none' : 'flex'}}>
			{/* <img src="../static/data/sgnloading.gif"/> */}
			<video autoPlay>
				<source src="../static/data/sgnloading.mp4" type="video/mp4"/>
			</video>
		</LoadingStyled>
	);
};

export default Loading;