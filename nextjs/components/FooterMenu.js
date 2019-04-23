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
	transition: 0.4s;
	color: white;
	bottom: 0;
	background-color: black;
}

.showMenu {
transform: translateY(0);
transition: 0.4s;
}

.footer-menu li {
	list-style: none;
	margin-top: 30px;
	margin-left: 20px;

}

.footer-menu li a {
	font-size: 40px;
	text-decoration: none;
	color: white;
}

.footer-image {
	width: 50px;
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
display: flex;
align-items: center;
justify-content: center;
z-index: 1;
bottom: 0;
right: 0;
margin-right: 16px;
margin-bottom: 16px;
position: fixed;
width: 70px;
height: 70px;
border-radius: 50%;
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);
background-color: var(--pink);

}

.bar-one {
text-align: center;
transform: rotate(45deg);
position: absolute;
width: 35px;
height: 4px;
background-color: #fff;

}

.bar-two {
text-align: center;
transform: rotate(-45deg);
position: absolute;
width: 35px;
height: 4px;
background-color: #fff;

}

.logo-placement {

margin-top: 20px;
margin-left: 20px;
}

.banner-tags {
font-size: 24px !important;
}

.arrow-down {
	margin-left: 110px;
	position: absolute;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 9px solid #fff;
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
				<div className="logo-placement">
				<Logo className="footer-image" color="white" width="200px"/>
				</div>
					<ul>
						<li><a href="#">What we do</a></li>
						<li><a href="#">About us</a></li>
						<li><a href="#">Activities</a></li>
						<li><a href="#">Contact</a></li>
						<li><a href="#">Support us</a></li>
						</ul>
					<div className="menu-banner">
						<li className="menu-banner-li"><a className="banner-tags" href="#">Branches</a>
							<div class="arrow-down"></div>
							</li>
							<li className="menu-banner-li"><a className="banner-tags" href="#">EN</a>
							<div class="arrow-down"></div>
						</li>

						<button id="menu-button" className="button">
							<div className="bar-one"></div>
							<div className="bar-two"></div>
						</button>
					</div>
				</nav>
			</FooterMenuStyled>
			)
		}
	}
	export default FooterMenu;
