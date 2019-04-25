import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PartnersStyled = styled.div`
	position: relative;
	padding: 0 96px;
	background: var(--milk-white);

	main {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		position: relative;
		width: 100%;
		padding: 240px 0 60px 0;
	}

	h1 {
		position: absolute;
		top: 0;
		left: 0;
		margin-top: 65px;
		margin-left: 96px;
	}

	img {
		width: 12%;
		margin: 0px 30px 65px 30px;
	}

	img:nth-child(3), img:nth-child(4), img:nth-child(5) {
		flex-basis: 15%;
	}

	@media screen and (max-width: 768px) {
		padding: 0 16px;

		main {
			flex-wrap: nowrap;
			justify-content: initial;
			padding: 32px 0 32px 0;
			animation: scroll 30s linear infinite;
		}

		@keyframes scroll {
			0% { transform: translateX(0); }
			100% { transform: translateX(calc(-250px * 7))}
		}

		h1 {
			position: sticky;
		}

		img {
			width: 196px;
			margin: 0;
			margin-left: 72px;
			flex-basis: 0%;
		}

		img:first-child {
			margin: 0;
		}

	}
`;

class Partners extends Component {

	state = {
		partners: []
	}

	componentDidMount() {
		axios.get('http://localhost:8888/wp-json/wp/v2/partners?order=asc&per_page=100')
		.then(response => {
			this.setState({
				partners: response.data
			});
		});
	}

	render() {
		return (
			<PartnersStyled>
				<h1>Partners</h1>
				<main>
					{
						this.state.partners.map(partner => {
							return <img key={partner.id} src={partner.acf.image}></img>
						})
					}
				</main>
			</PartnersStyled>
		);
	}
}

export default Partners;
