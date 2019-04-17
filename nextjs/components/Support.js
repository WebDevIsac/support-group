import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import Arrow from './Arrow';

const SupportStyled = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 300px;
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