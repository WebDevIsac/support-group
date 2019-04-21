import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import Arrow from './Arrow';

const SupportStyled = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 150px 100px;

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
		min-height: 500px;
	}

	h1 {
		font-size: 65px;
		width: 570px;
		font-weight: 900;
	}

	div {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 230px;
		height: 50px;
		background: #FE5A67;
		text-transform: uppercase;
		font-size: 24px;
		font-weight: bold;
		padding: 0 5px;
		color: #fff;
		cursor: pointer;
	}

	div:hover {
		opacity: 0.8;
	}

	img {
		width: 40%;
	}

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		padding: 0 16px 100px 16px;
		height: 60vh;

		section {
			min-height: 200px;
		}

		h1 {
			font-size: var(--h2-size);
			font-weight: var(--h2-weight);
			width: 100%;
		}

		img {
			width: 80%;
		}
	}
`;

class Support extends Component {

	state = {
		content: null
	}

	componentDidMount() {
		axios.get('http://localhost/wp-json/wp/v2/contents?slug=first')
		.then(response => {
			this.setState({
				content: response.data[0]
			})
		})
	}

	render() {
		if (this.state.content) {
			return (
				<SupportStyled>
					<section>
						<h1>{this.state.content.acf.header}</h1>
						<div>{this.state.content.acf.text} <Arrow/></div>
					</section>
					<img src={this.state.content.acf.image}></img>
				</SupportStyled>
			);
		}
		return <div/>
	}
};

export default Support;