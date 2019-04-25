import React, { Component, Fragment } from 'react';
import axios from "axios";
import Banner from './Banner';
import Logo from './Logo';
import Navbar from './Navbar';
import Link from 'next/link';

import styled from 'styled-components';

const FooterStyled = styled.div`
background-color: #212121;
display: flex;
justify-content:space-between;
box-sizing:border-box;
flex-direction:column;
bottom: 0;
left: 0;
height: 750px;
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
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-right: 20px;
width: 33%;
height: 180px;
color: white;
}

.menuItem img {
	margin-left: 8px;
}

.menuItem li {
margin-bottom: 10px;
position: relative;
font-size: 14px;
color: #E7EEED;
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
bottom: 0;
right: 0;
flex-direction: column;
height: 180px;
display: flex;
justify-content: space-evenly;
margin-bottom: 260px;
margin-right: 295px;
}

.lang {
height: 200px;
color: #fff;
margin-top: 58px;
position: absolute;
margin-left: 250px;
flex-direction: column;
display: flex;
justify-content: flex-start;
}


.lang-eng {
height: 50px;
font-size: 14px;
color: #E7EEED;
margin-left: 250px;
margin-top: 100px;
flex-direction: row;
display: flex;
position: absolute;
justify-content: space-between;
width: 190px;
}

.drop-down {
	z-index: 5;
	position: absolute;
	top: 0;
	left: 0;
	margin-top: 20px;
	width: 106px;
	height: 290px;
	z-index: 10px;
	display: none;
	padding: 16px;
	justify-content: center;
	flex-direction: column;
	justify-content: space-between;
	background-color: var(--charcoal-grey);
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);
	margin-left: 70px;
 }

 .lang-eng .drop-down {
	left: initial;
	right: 0;
	margin-right: -106px;
	margin-top: 52px;
 }

.arrow-down:hover + .drop-down {
	display: flex;
}

.drop-down:hover {
	display: flex;
}


.drop-down li {
	list-style: none;
	color: #fff;
}

.drop-down a {
	color: #fff;
	text-decoration: none;

}

.arrow-down {
margin-top: 5px;
cursor:pointer;
}


@media screen and (max-width: 768px) {

background-color: #212121;
display: flex;
flex-direction:column;
justify-content: flex-start;
left: 0;
height: 1000px;
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
justify-content: flex-start;
padding:0;
height: auto;
/* top: 150px; */
width:27%;
margin-top: 60px;
}

.menuItem:nth-child(4) {
width: 50%;
}


.menuItem li {
margin-bottom: 10px;
font-size: 14px;
color: #E7EEED;
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
height: 550px;
display: flex;
padding: 25px;
align-items: flex-start;
justify-content: space-between;
margin: 0;
flex-wrap: wrap;
}


/* .footer-menu li {
list-style: none;
margin-top: 30px;
margin-left: 10px;

}

.footer-menu li a {
font-size: 35px;
text-decoration: none;
color: white;
} */

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
margin-right: 16px;
margin-bottom: 270px;
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
margin-top: 20px;
width: 106px;
height: 290px;
z-index: 10px;
display: none;

}


.arrow-down:hover + .drop-down {
	display: flex;
}

.drop-down:hover {
	display: flex;
}


.drop-down-menu a {
color: #fff;
text-decoration: none;
}

.arrow-down {
margin-top: 5px;
cursor:pointer;
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
			let isMobile = window.innerWidth < 768 ? "social" : null
			let filtered = res.data.filter(item => {
				return item.slug != "banner" && item.slug != "languages" && item.slug != isMobile
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

						<img className="arrow-down" src="/static/data/downarrow_white.svg" alt="arrow"></img>
						<div className="drop-down">
								<li>English</li>
								<li>Swedish</li>
								<li>Somali</li>
								<li>Persian</li>
								<li>Arabic</li>
								<li>Eritrea</li>
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
								return <li>{item.text} {item.text === "Branches" && 
								<Fragment>
									<img className="arrow-down" src="/static/data/downarrow_white.svg" alt="arrow"></img>
									<div className="drop-down">
											<li><a href="/branches/Restadgård">Restadgård</a></li>
											<li><a href="/branches/Götene">Götene</a></li>
											<li><a href="/branches/Halmstad">Halmstad</a></li>
											<li><a href="/branches/Vänerborg">Vänerborg</a></li>
											<li><a href="/branches/Lidköping">Lidköping</a></li>
											<li><a href="/branches/Stuttgart">Stuttgart</a></li>
									</div>
								</Fragment>
								}</li>
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
				}
				)}
				</div>
			</div>

				<Banner />
			</FooterStyled>
			)
		}
	}
	export default Footer;
