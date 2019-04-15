import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import Arrow from './Arrow';

const SupportStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: left;
	height: 300px;
	padding: 150px 100px;

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
				<h1>{this.state.content.acf.header}</h1>
				<div>{this.state.content.acf.text} <Arrow/></div>
				</SupportStyled>
			);
		}
		return <div/>
	}
};

export default Support;