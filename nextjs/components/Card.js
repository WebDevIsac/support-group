import React from 'react';

import styled from 'styled-components';

const CardStyled = styled.div`
	width: 30%;
	height: 700px;
	color: #000;
	margin: 0;
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);

	img {
		width: 100%;
		border-bottom: 10px solid #FE5A67;
		/* max-height: 300px; */
	}

	div {
		padding: 0 40px;
	}

	p {
		font-size: 16px;
		margin: 16px 0;
	}

	@media only screen and (max-width: 768px) {
		width: 100vw;
		height: 100%;
		margin: 12px 0;
	}
`;

const Card = ({ card }) => {
	const textSplit = card.acf.text.split('<br />');
	return (
		<CardStyled>
			<img src={card.acf.image} alt="photography"/>
			<div>
				<h2>{card.acf.header}</h2>
				{textSplit.map((text, index) => {
					return <p key={index}>{text}</p>
				})}
			</div>
		</CardStyled>
	);
};

export default Card;
