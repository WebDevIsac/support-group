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


.images {
flex-direction: column;
margin-right: 60px;
height: 200px;
display: flex;
justify-content: space-evenly

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


.menuItem {
list-style: none;
margin-right: 20px;
width: 33%;
height: 100px;
color: white;


}
.menuItemsPosition {
/* flex-wrap:wrap; */
height: 400px;
margin-left: 250px;
flex-direction: column;
display: flex;
flex-direction: row;
justify-content: center;
}


@media screen and (max-width: 768px) {

.menuItem {
display: flex;
flex-direction: column;
padding:0;
height: 80px;
margin-bottom: 110px;
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

.menuItemsPosition {
height: 300px;
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
margin-bottom: 50px;
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
		axios.get(`http://localhost:8888/wp-json/wp/v2/footer?order=asc`)
		.then(res => {
			let filtered = res.data.filter(item => {
				return item.slug != "banner"
			});
				let images = res.data.find(item => item.slug == 'social')
					console.log(images);
			this.setState({
			footer: filtered,
			social: images.acf.content,


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
				this.state.footer.map(item => {
					console.log(item);
					return (

					<div className="menuItem">
						<h4>{item.title.rendered}</h4>

							<li>{item.acf.content[0].text}</li>
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
