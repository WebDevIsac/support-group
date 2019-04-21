import React, { Component } from 'react';
import axios from "axios";
import Banner from './Banner';
import Logo from './Logo';

import styled from 'styled-components';

const FooterStyled = styled.div`

	background-color: black;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	padding: 130px;
	bottom: 0;
	left: 0;
	height: 500px;
	position: relative;
	color: white;

	@media (max-width: 768px) {
		& {
			height: 800px;
			width: 100vh;
		}

		.logo-position {
			float: right;
			width: 800px;

		}
	}

	.logo-position {
		position: absolute;
		top: 0;
		left: 0;
		margin-top: 100px;
		margin-left: 100px;
	}


	.title {
		color: white;
	}

`;

class Footer extends Component {
	state = {
		footer: [],
	}

	componentDidMount(){
		const api = process.env.WP_KEY;
		axios.get(`http://localhost/wp-json/wp/v2/footer`)
		.then(res => {
			let filtered = res.data.filter(item => {
				return item.slug != "banner"
			});
			this.setState({ footer: filtered });
		});
	}

	render() {
		return(
			<FooterStyled>
			<div className="logo-position">
				<Logo color="white" width="200px"/>
			</div>
			<div className="socialItems">
			</div>
			{
				this.state.footer.map(item => {
					console.log(item);
					return (
					<div className="menuItems">
						<h4>{item.title.rendered}</h4>
							{
								item.acf.content.image && item.acf.content.image.map(item => {
									return <img src={item.image}></img>
								})
							}
					</div>
					)
				})
			}

			<Banner />
			</FooterStyled>
		)
	}
}
export default Footer;
