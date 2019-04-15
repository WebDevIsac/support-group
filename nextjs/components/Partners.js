import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PartnersStyled = styled.div`
	display: grid;
	position: relative;
	width: 100%;
	padding: 204px 0 141px 0;

	h1 {
		position: absolute;
		top: 0;
		left: 0;
		margin-top: 65px;

	}

	div {
		width: 200px;
	}

	img {
		width: 100%;
	}
`;

class Partners extends Component {

	state = {
		partners: []
	}

	componentDidMount() {
		axios.get('http://localhost/wp-json/wp/v2/partners?order=asc')
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
						return <div key={partner.id}><img src={partner.acf.image}></img></div>
					})
				}
			</PartnersStyled>
		);
	}
}

export default Partners;