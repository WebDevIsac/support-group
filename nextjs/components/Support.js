import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';

const SupportStyled = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 64px 72px 0 64px;
	margin: 0 96px;

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
		min-height: 500px;
	}

	h1 {
		width: 570px;
	}

	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 168px;
		height: 48px;
		background: #FE5A67;
		font-size: var(--button-size);
		font-weight: bold;
		padding: 0 16px;
		color: #fff;
		cursor: pointer;
	}

	div:hover {
		background: #EA5A67;
	}

	div img {
		width: 32px;
		height: 12.6px;
	}

	img {
		width: 600px;
	}

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		padding: 0;
		height: 60vh;
		margin: 0 16px 60px 16px;


		section {
			min-height: 200px;
		}

		h1 {
			width: 100%;
		}

		div img {
			margin: 0;
		}

		img {
			margin-top: 56px;
			width: 227px;
			height: 167px;
		}
	}
`;

class Support extends Component {

	state = {
		content: null
	}

	componentDidMount() {
		axios.get('http://localhost:8888/wp-json/wp/v2/contents?slug=first')
		.then(response => {
			this.setState({
				content: response.data[0]
			})
		})
	}

	render() {

		const handleScroll = () => {
			const element = document.getElementById('4');
			element.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
		}

		if (this.state.content) {
			return (
				<SupportStyled>
					<section>
						<h1>{this.state.content.acf.header}</h1>
						<div onClick={handleScroll}>Support us <img src="../static/data/arrow_white.svg"></img></div>
					</section>
					<img src={this.state.content.acf.image}></img>
				</SupportStyled>
			);
		}
		return <div/>
	}
};

export default Support;
