import React, { Component } from 'react';
import axios from "axios";
import Banner from './Banner';
import Logo from './Logo';
import Navbar from './Navbar';

import styled from 'styled-components';

const FooterMenuStyled = styled.div`

.footer-menu {
display: none;
}

@media screen and (max-width: 768px) {

.menuItem {
padding:5px;
height: 50px;
margin:20px 0;
width:33%;
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
justify-content: flex-end;
margin: 0;
flex-wrap: wrap-reverse;
}


.footer-menu {
	/* visibility: hidden; */
	display: flex;
	position: fixed;
	flex-direction: column;
	z-index: 5;
	justify-content: flex-start;
	width: 100%;
	height: 100vh;
	transform: translateY(700px);
	color: white;
	bottom: 0;
	background-color: black;
}

.showMenu {
transform: translateY(0);
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

}
`;

	class FooterMenu extends Component {


		render() {
			setTimeout(() => {
			const footer = document.querySelector('#footer-menu');

			const button = document.querySelector('#menu-button');

			button.addEventListener('click', ( event ) => {
				console.log(footer);
				if (footer.classList.contains('showMenu')) {
					footer.classList.remove('showMenu');
				}
				else {
					footer.classList.add('showMenu');
				}
			})

			}, 20);


			return(
				<FooterMenuStyled>

			<nav className="footer-menu" id="footer-menu">
				<Logo className="footer-image" color="white" width="200px"/>
				<ul>
					<li><a href="#">What we do</a></li>
					<li><a href="#">About us</a></li>
					<li><a href="#">Activities</a></li>
					<li><a href="#">Contact</a></li>
					<li><a href="#">Support us</a></li>
				</ul>
					<div className="menu-banner">
						<li className="menu-banner-li"><a href="#">Branches</a></li>
						<li className="menu-banner-li"><a href="#">EN</a></li>
						<button id="menu-button" className="button">
							<div className="bar"></div>
							<div className="bar"></div>
						</button>
					</div>
				</nav>
			</FooterMenuStyled>
			)
		}
	}
	export default FooterMenu;
