import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const CardContainerStyled = styled.div`
	z-index: 0;
	height: 100vh;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	/* ::before {
		content: "";
		position: absolute;
		bottom: 0px;
		left: -50px;
		right: -50px;
		border-bottom: 10px solid #FE5A67;
	} */
`;

const CardContainer = ({cards}) => {
	return (
		<CardContainerStyled>
			{cards.map(card => {
				return (
					<Card card={card} key={card.id}/>
				)
			})}
		</CardContainerStyled>
	)
};

export default CardContainer;