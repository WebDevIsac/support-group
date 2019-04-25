import React, { Component } from 'react';
import axios from "axios";
import Banner from './Banner';
import Logo from './Logo';
import Navbar from './Navbar';
import Link from 'next/link';

import styled from 'styled-components';

const FooterMenuStyled = styled.div`

	display: none;

	.footer-menu {
		display: none;
	}

	@media screen and (max-width: 768px) {

		background-color: #212121;
		display: flex;
		flex-direction:column;
		justify-content: flex-start;
		left: 0;
		bottom: 0;
		width: 100vw;
		/* background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		overflow-x: hidden; */

		.menuItem {
			padding: 5px;
			height: 50px;
			margin:20px 0;
			width: 33%;
			margin-top: 0;
		}

		.logo-placement {
			margin-top: 16px;
			margin-left: 16px;
		}

		.footer-menu {
			display: flex;
			position: fixed;
			overflow: scroll;
			flex-direction: column;
			z-index: 5;
			justify-content: space-between;
			align-items: flex-start;
			width: 100%;
			height: auto;
			transform: translateY(140%);
			transition: 0.4s;
			color: white;
			top: 0;
			bottom: 0;
			background-color: var(--charcoal-grey);
			background-position: fixed;
		}

		.showMenu {
			transform: translateY(0);
			transition: 0.4s;
		}

		.footer-menu li {
			list-style: none;

		}

		.footer-menu li a {
			font-size: 40px;
			text-decoration: none;
			color: white;
		}

		.footer-image {
			width: 50px;
		}

		.menu {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			margin: 56px 16px 32px 16px;
			height: 340px;
			width: 204px;
		}

		.menu li {
			font-size: var(--h2-size);
			font-weight: var(--h2-weight);
			letter-spacing: var(--h2-spacing);
			line-height: var(--h2-height);
		}

		.menu-banner {
			display: flex;
			flex-direction: column;
			position: relative;
			width: 100%;
			height: auto;
			background-color: var(--pink);
			background-position: fixed;
		}

		.menu-banner > div {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			margin: 24px 16px;
		}

		.menu-banner .drop-button {
			display: inline-block;
			font-size: var(--h3-size);
			font-weight: var(--h3-weight);
		}

		.drop-down {
			display: none;
			flex-direction: column;
			align-items: flex-start;
			padding: 8px 0 0 0;
		}

		.branches-container .drop-down {
			margin-left: 108px;
		}

		.languages-container .drop-down {
			margin-left: 40px;
		}

		.drop-down a {
			margin-bottom: 24px;
			font-size: var(--p-size);
			font-weight: var(--p-weight);
		}

		.show-drop-down {
			display: flex;
		}

		.drop-down a {
			color: white;
			text-decoration: none;
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
			position: absolute;
			width: 70px;
			height: 70px;
			border-radius: 50%;
			box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);
			background-color: var(--pink);
			border: none;
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


	}
`;

	class FooterMenu extends Component {


		render() {
			const handleButton = () => {
				const footer = document.querySelector('#footer-menu');
				if (footer.classList.contains('showMenu')) {
					footer.classList.remove('showMenu');
				}
				else {
					footer.classList.add('showMenu');
				}
			}

			setTimeout(() => {
				const urlQuery = window.location.search;
				const footer = document.querySelector('#footer-menu');
				const menu = document.querySelectorAll('.footer-menu .menu li');
				const menuArray = Array.from(menu);
				if (urlQuery) {
					setTimeout(() => {
						const newIndex = urlQuery[1];
						footer.classList.remove('showMenu');
						smoothScroll(newIndex);
					}, 4000);
				}
				menuArray.forEach((item, index) => {
					item.addEventListener('click', () => {
						if (this.props.page !== "start") {
							window.location = `/?${index}`;
						}
						else {
							footer.classList.remove('showMenu');
							smoothScroll(index);
						}
					});
				});
			}, 200);

			const smoothScroll = (index) => {
				const element = document.getElementById(index);
				
				element.scrollIntoView({
					behavior: "smooth",
					block: "center"
				});
				history.replaceState(null,null,'/');
			}

			const handleDropDown = (e) => {
				let element = e.target;
				const footer = document.querySelector('#footer-menu');
				const banner = document.querySelector('.menu-banner');
				while (element.tagName !== "DIV") {
					element = element.parentElement;
				}
				const dropDown = element.nextSibling;
				if (dropDown.classList.contains('show-drop-down')) {
					dropDown.classList.remove('show-drop-down');
					footer.scrollTop = footer.scrollHeight;
				} else {
					dropDown.classList.add('show-drop-down');
					banner.scrollIntoView({
						behavior: "smooth",
						block: "end"
					})
				}

			}

			return (
				<FooterMenuStyled>
					<nav className="footer-menu" id="footer-menu">
						<div className="logo-placement">
							<Logo className="footer-image" color="white" width="200px"/>
						</div>
						<ul className="menu">
							<li>What we do</li>
							<li>About us</li>
							<li>Activities</li>
							<li>Contact</li>
							<li>Support us</li>
						</ul>
						<div className="menu-banner">
							<div className="branches-container">
								<div className="drop-button" onClick={handleDropDown}>Branches <img src="/static/data/downarrow_white.svg" alt="arrow"/></div>
								<div className="drop-down">
									<Link href="/branches/Göteborg"><a href="/branches/Göteborg">Göteborg</a></Link>
									<Link href="/branches/Götene"><a href="/branches/Götene">Götene</a></Link>
									<Link href="/branches/Halmstad"><a href="/branches/Halmstad">Halmstad</a></Link>
									<Link href="/branches/Lidköping"><a href="/branches/Lidköping">Lidköping</a></Link>
									<Link href="/branches/Mölndal"><a href="/branches/Mölndal">Mölndal</a></Link>
									<Link href="/branches/Restadgård"><a href="/branches/Restadgård">Restadgård</a></Link>
									<Link href="/branches/Stuttgart"><a href="/branches/Stuttgart">Stuttgart</a></Link>
									<Link href="/branches/Vänersborg"><a href="/branches/Vänersborg">Vänersborg</a></Link>
								</div>
							</div>
							<div className="languages-container">
								<div className="drop-button" onClick={handleDropDown}>EN <img src="/static/data/downarrow_white.svg" alt="arrow"/></div>
								<div className="drop-down">
									<Link href=""><a href="">English</a></Link>
									<Link href=""><a href="">Swedish</a></Link>
									<Link href=""><a href="">Somali</a></Link>
									<Link href=""><a href="">Persian</a></Link>
									<Link href=""><a href="">Arabic</a></Link>
									<Link href=""><a href="">Swe</a></Link>
									<Link href=""><a href="">Eritrea</a></Link>
								</div>
							</div>
							<button id="menu-button" className="button" onClick={handleButton}>
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
