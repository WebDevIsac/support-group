import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PartnersStyled = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	position: relative;
	width: 100%;
	padding: 204px 0 141px 0;

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
				{
					this.state.partners.map(partner => {
						return <img key={partner.id} src={partner.acf.image}></img>
					})
				}
			</PartnersStyled>
		);
	}
}

export default Partners;