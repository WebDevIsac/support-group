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
		margin-left: 250px;
		flex-direction: column;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}


	.images {
	position: absolute;
	flex-direction: column;
	height: 180px;
	display: flex;
	justify-content: space-evenly;
	margin-left: 380px;
	margin-top: 50px;

}

	.lang {
		height: 200px;
		color: #fff;
		margin-top: 55px;
		position: absolute;
		margin-left: 250px;
		flex-direction: column;
		display: flex;
		justify-content: flex-start;
	}


	.lang-eng {
		height: 50px;
		color: #fff;
		margin-left: 250px;
		margin-top: 100px;
		flex-direction: row;
		display: flex;
		position: absolute;
		justify-content: space-between;
		width: 150px;
	}


	.drop-down li {
	/* display: none; */
	list-style: none;
}


	.arrow-down {
	margin-top: 20px;
	cursor:pointer;
	}

	.arrow-position {

	/* height: 200px;
	margin-top: 10px;
	position: absolute;
	margin-left: 25px;
	flex-direction: column;
	display: flex;
	justify-content: flex-start; */

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
display: flex;
flex-direction: column;
padding:0;
height: 0;
top: 150px;
width:27%;
margin-top: 0;
}

.logo-position {
position:static;
display: flex;
padding: 0;
width: 350px;
justify-content: flex-end;
margin:0;
}


.menuItemsPosition {
height: 400px;
display: flex;
padding: 25px;
align-items: center;
justify-content: space-between;
margin: 0;
flex-wrap: wrap;
}


.footer-menu li {
	list-style: none;
	margin-top: 30px;
	margin-left: 20px;

}

.footer-menu li a {
	font-size: 35px;
	text-decoration: none;
	color: white;
}

.footer-image {
	margin-top: 50px;
}


.menu-banner {
margin-top: 20px;
width: 100%;
height: 280px;
background-color: var(--pink);
}

.menu-banner a {
font-size: 20px;
}


.button {
z-index: 1;
margin-left: 280px;
margin-top: 20px;
position: fixed;
width: 70px;
height: 70px;
border-radius: 50%;
background-color: var(--pink);

}

.images {
flex-direction: column;
height: 180px;
display: flex;
justify-content: space-evenly;
margin-left: 280px;
margin-top: 280px;
}

.lang {
	height: 200px;
	color: #fff;
	margin-top: 100px;
	position: absolute;
	margin-left: 25px;
	flex-direction: column;
	display: flex;
	justify-content: flex-start;
}


.lang-eng {
	height: 50px;
	width: 150px;
	color: #fff;
	margin-left: 25px;
	margin-top: 150px;
	justify-content: space-between;
	flex-direction: row;
	display: flex;
	position: absolute;

}

.drop-down {
width: 30px;
height: 70px;
background-color: pink;
}

.drop-down li {
/* display: none; */
list-style: none;
}

.arrow-position {

height: 200px;
margin-top: 10px;
position: absolute;
margin-left: 25px;
}

}
`;

	class Footer extends Component {
		state = {
			footer: [],
			social: [],
			languages: [],
		}


	componentDidMount(){
		const api = process.env.WP_KEY;
		axios.get(`http://localhost/wp-json/wp/v2/footer?order=asc`)
		.then(res => {
			let filtered = res.data.filter(item => {
				return item.slug != "banner" && item.slug != "languages"

			});
				let languages = res.data.find(item => item.slug == 'languages')
				let images = res.data.find(item => item.slug == 'social')
			this.setState({
			footer: filtered,
			social: images.acf.content,
			languages: languages,

 			});

		});
	}

		render() {
			return(
				<FooterStyled>
				<div className="logo-position">
				<Logo className="logo-image" color="white" width="200px"/>
			</div>
			<div className="lang">
					{this.state.languages.title && <h4>{this.state.languages.title.rendered}</h4>}
					</div>
					<div className="lang-eng">
						{
							this.state.languages.acf && this.state.languages.acf.content.map(item => {
								return <h4>{item.text}</h4>
							})
						}
						<div className="menu-position">
							<img className="arrow-down" src="/static/data/downarrow_white.svg" alt="arrow"></img>
							<nav className="drop-down">
								<ul>
									<li>En</li>
									<li>Swe</li>
								</ul>
							</nav>
					</div>
				</div>
			<div className="menuItemsPosition">
			{
				this.state.footer.map((item, index) => {
					return (

					<div key={index} className="menuItem">
						<h4>{item.title.rendered}</h4>

						{
							item.acf.content && item.acf.content.map(item => {
								return <li>{item.text}</li>
							})
						}
						</div>
						)
					})
				}

				<div className="images">

				{
					this.state.social.map(image => {
					return <img src={image.image}></img>

				})}
				</div>
			</div>

				<Banner />
			</FooterStyled>
			)
		}
	}
	export default Footer;
