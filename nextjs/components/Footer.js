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
/* flex-wrap:wrap; */
height: 400px;
margin-left: 300px;
flex-direction: column;
display: flex;
flex-direction: row-reverse;
justify-content: center;
}

@media screen and (max-width: 768px) {

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
justify-content: flex-end;
margin:0;
}

background-color: #212121;
display: flex;
flex-direction:column;
justify-content: flex-start;
left: 0;
height: 1050px;
bottom: 0;
width: 100vw;
/* padding: 200px; */
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
overflow-x: hidden;

.menuItemsPosition {
display: flex;
padding: 25px;
justify-content: space-between;
margin: 0;
flex-wrap: wrap;
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
				this.setState({ footer: filtered });
			});
		}

		render() {
			return(
				<FooterStyled>
				<div className="logo-position">
				<Logo color="white" width="200px"/>

				</div>

				<div className="menuItemsPosition">
				{
					this.state.footer.map(post => {
						console.log(post);
						return (
							<div className="menuItem">
							<h4>{post.title.rendered}</h4>
							<li>{post.acf.content[0].text}</li>
							{
								post.acf.content.image && post.acf.content.image.map(item => {
									return <img src={item.image}></img>
								})
							}
							</div>
						)
					})
				}
				</div>
				<Banner />
				</FooterStyled>
			)
		}
	}
	export default Footer;
