import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Card from './Card';

const CardContainerStyled = styled.div`
	z-index: 0;
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 100px;

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		height: 100%;
	}
`;

class CardContainer extends Component {

	state = {
		cards: []
	}

	componentDidMount() {
		axios.get(`http://localhost/wp-json/wp/v2/cards`)
		.then(response => {
			this.setState({
				cards: response.data
			});
		});
	}

	render() {
		return (
			<CardContainerStyled id="1">
				{
					this.state.cards.map(card => {
					return (
						<Card card={card} key={card.id}/>
					)
					})
				}
			</CardContainerStyled>
		)
	}
};

export default CardContainer;