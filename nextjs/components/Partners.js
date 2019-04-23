import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PartnersStyled = styled.div`
	position: relative;

	main {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		position: relative;
		width: 100%;
		padding: 204px 0 141px 0;
	}

	h1 {
		position: absolute;
		top: 0;
		left: 0;
		margin-top: 65px;
	}

	img {
		width: 12%;
		margin: 0px 30px 65px 30px;
	}

	img:nth-child(3), img:nth-child(4), img:nth-child(5) {
		flex-basis: 15%;
	}

	@media screen and (max-width: 768px) {

		margin-left: 16px;
		
		main {
			flex-wrap: nowrap;
			justify-content: initial;
			padding: 32px 0 32px 0;
			overflow-x: scroll;
		}

		h1 {
			position: sticky;
		}

		img {
			width: 196px;
			margin: 0;
			margin-left: 32px;
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
		axios.get('http://localhost/wp-json/wp/v2/partners?order=asc&per_page=100')
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
