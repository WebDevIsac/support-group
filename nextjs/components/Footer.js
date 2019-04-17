import React, { Component } from 'react';
import axios from "axios";
import Banner from './Banner';
import Logo from './Logo';

import styled from 'styled-components';

const FooterStyled = styled.div`

@media (max-width: 768px) {
&{height: 800px;
	width: 100vh;}

	.logo-position {
	position: absolute;
	float: right;
	top: 0;
	left: 0;
	margin-top: 100px;
	margin-left: 100px;
	width: 800px;

	}

}

	background-color: black;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	padding: 130px;
	bottom: 0;
	left: 0;
	height: 500px;
	position: relative;

	@media  (max-width: 768px) {
		left: 0;
		bottom: 0;
		height: 800px;
		width: 100vh;
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
		axios.get(`http://localhost:8888/wp-json/wp/v2/footer`)
		.then(res => {
			let filtered = res.data.filter(item => {
				return item.slug != "banner"
			});
			this.setState({ posts: filtered });
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
				this.state.posts.map(post => {
					return (
					<div className="menuItems">
						<h4>{post.title.rendered}</h4>
							{
								post.acf.content.image && post.acf.content.image.map(item => {
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
