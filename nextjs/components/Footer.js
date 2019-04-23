import React, { Component } from 'react';
import axios from "axios";
import Banner from './Banner';
import Logo from './Logo';
import Navbar from './Navbar';

import styled from 'styled-components';

const FooterStyled = styled.div`
	background-color: #212121;
	display: flex;
	justify-content:space-between;
	box-sizing:border-box;
	flex-direction:column;
	/* padding:50px; */
	bottom: 0;
	left: 0;
	height: 650px;
	width: 100vw;
	position: relative;


	.logo-position {
		position:static;
		display: flex;
		padding: 0;
		width: 350px;
		justify-content: flex-start;
		margin-left: 50px;
		margin-top: 30px;
	}


	.menuItem {
		list-style: none;
		margin-right: 20px;
		width: 33%;
		height: 100px;
		color: white;
	}

	.menuItemsPosition {
		height: 400px;
		margin-left: 300px;
		flex-direction: column;
		display: flex;
		flex-direction: row-reverse;
		justify-content: center;
	}

	@media screen and (max-width: 768px) {
		background-color: #212121;
		display: flex;
		flex-direction:column;
		justify-content: flex-start;
		left: 0;
		height: 1050px;
		bottom: 0;
		width: 100vw;
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		overflow-x: hidden;

		.menuItem {
			padding:0;
			height: 0;
			margin:20px 0;
			width:33%;
			margin-top: 40px;
		}


		.logo-position {
			position:static;
			display: flex;
			padding: 0;
			width: 350px;
			justify-content: flex-start;
			margin-left: 50px;
			margin-top: 30px;
		}

		.menuItemsPosition {
			height: 400px;
			margin-left: 250px;
			flex-direction: column;
			display: flex;
			flex-direction: row-reverse;
			justify-content: center;
		}
	}
`;

	class Footer extends Component {
		state = {
			footer: [],
			social: []

		}


	componentDidMount(){
		const api = process.env.WP_KEY;
		axios.get(`http://localhost/wp-json/wp/v2/footer?order=asc`)
		.then(res => {
			let filtered = res.data.filter(item => {
				return item.slug != "banner"
			});
				let images = res.data.find(item => item.slug == 'social')
			this.setState({
			footer: filtered,
			social: images.acf.content

 			});

		});
	}

		render() {
			return(
				<FooterStyled>
				<div className="logo-position">
				<Logo className="logo-image" color="white" width="200px"/>
			</div>
			<div className="menuItemsPosition">
			{
				this.state.footer.map((item, index) => {
					return (

					<div key={index} className="menuItem">
						<h4>{item.title.rendered}</h4>

							<li>{item.acf.content[0].text}</li>
							</div>
						)
					})
				}
				{this.state.social.map((image, index) => {
					return <img key={index} src={image.image}></img>
				})}
			</div>

				<Banner />
			</FooterStyled>
			)
		}
	}
	export default Footer;
