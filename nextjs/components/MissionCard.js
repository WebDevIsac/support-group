import React from 'react';

import styled from 'styled-components';

const MissionCardStyled = styled.div`
	background: #53585F;
	width: 500px;
	height: 700px;
	color: white;

	img {
		width: 100%;
		border-bottom: 10px solid #FE5A67;
	}

	div {
		padding: 40px;
	}

	h1 {
		font-size: 44px;
	}

	p {
		font-size: 16px;
		margin: 16px 0;
	}
`;

const MissionCard = ({ card }) => {
	return (
		<MissionCardStyled>
			<img src={card.image} alt="photography"/>
			<div>
				<h1>{card.title}</h1>
				{card.text.map(text => {
					return (
						<p>{text}</p>
					)
				})}
			</div>
		</MissionCardStyled>
	);
};

export default MissionCard;