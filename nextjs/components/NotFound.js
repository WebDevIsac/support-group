import React, { Component } from 'react';
import styled from 'styled-components';

const NotFoundStyled = styled.div`
	height: 80vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		width: 602px;
		height: 306px;
		margin-bottom: 80px;
	}

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: var(--button-size);
		font-weight: var(--button-weight);
		margin-top: 24px;
		width: 198px;
		height: 24px;
		background: var(--pink);
		padding: 12px 16px;
		cursor: pointer;
		color: white;
	}

	div img {
		width: 32px;
		height: 12.6px;
		margin: 0;
	}
`;

class NotFound extends Component {
	render() {
		const handleButton = () => {
			window.history.back();
		}
		return (
			<NotFoundStyled>
				<img src="../static/data/404.svg"></img>
				<h3>Don't cry. The page couldn't be found but it will appear soon.</h3>
				<div onClick={handleButton}>Take me back <img src="../static/data/arrow_white.svg"></img></div>
			</NotFoundStyled>
		);
	}
}

export default NotFound;