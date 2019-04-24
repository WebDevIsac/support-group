import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const BoxStyled = styled.div`
    width: 100%;
	height: 550px;
	/* margin-left: -100px; */
	margin-top: 100px;
    background: var(--pink);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	section {
		padding: 50px 100px;
		width: 600px;
		color: white;
	}

	h1 {
		font-size: var(--h1-size);
		font-weight: var(--h1-weight);
		margin: 0;
		margin-bottom: 50px;
	}

	aside {
		width: 700px;
		padding: 0px 96px 0 0;
	}

	img {
		width: 100%;
	}

	@media only screen and (max-width: 768px) {
		flex-direction: column-reverse;
		margin: 0;
		height: 100%;
		width: 100%;
		padding: 50px 0;

		section {
			width: 90%;
			padding: 0;
			padding-left: 24px;
			padding-right: 24px;
		}

		h1 {
			font-size: 42px;
		}

		aside {
			width: 100%;
			padding: 0;
		}

		img {
			width: 100%;
		}

	}
`;

class Box extends Component {

	state = {
		header: "",
		textSplit: [],
		image: ""
	}

	componentDidMount() {
		axios.get('http://localhost/wp-json/wp/v2/contents?slug=smiles')
		.then(response => {
			this.setState({
				header: response.data[0].acf.header,
				textSplit: response.data[0].acf.text.split('<br />'),
				image: response.data[0].acf.image
			})
		});
	}

	render() {
		return (
			<BoxStyled id="1">
				<section>
					<h1>{this.state.header}</h1>
					{
						this.state.textSplit.map((text, index) => {
							return <p key={index}>{text}</p>
						})
					}
				</section>

				<aside>
					<img src={this.state.image}></img>
				</aside>
			</BoxStyled>
		)
		}
};

export default Box;
