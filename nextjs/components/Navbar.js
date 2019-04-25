import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

import styled from 'styled-components';

const NavbarStyled = styled.nav`
	z-index: 5;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100px;
	background: var(--cloud-white);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);

	.logo {
		position: absolute;
		top: 0;
		left: 0;
		margin: 24px 0px 24px 96px;
	}

	img {
		width: 10px;
		height: 10px;
	}

	ul {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-end;
		width: 65%;
		padding-inline-start: 0;
		margin-block-start: 0;
		margin-block-end: 0;
		margin-left: 320px;
		margin-right: 150px;
		height: 60px;
	}

	ul li {
		margin-left: 48px;
		cursor: pointer;
		color: black;
		list-style-type: none;
		font-weight: bold;
		font-size: var(--h3-size);
		font-weight: var(--h3-weight);
	}
	
	.navbar {
		margin-left: 332px;
		justify-content: flex-start;
	}

	.tools {
		height: 60px;
		padding: 20px 112px 20px 48px;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		width: 296px;
		background: var(--pink);
		color: white;
		font-size: var(--h3-size);
		font-weight: var(--h3-weight);
	}

	.tools div {
		display: inline-block;
		cursor: pointer;
	}


	.menu {
		position: absolute;
		top: 0;
		width: 96px;
		height: 384px;
		margin: 0;
		height: initial;
		margin-top: 100px;
		padding: 10px 25px;
		background: #212121;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		transition: transform 0.2s ease-in;
		transform: translateY(-150%);
		z-index: -1;
	}

	#branches {
		left: 0;
		margin-left: 22px;
	}

	#languages {
		width: 72px;
		height: 290px;
		right: 0;
		margin-right: 112px;
	}

	.menu li {
		margin: 10px 0;
		cursor: pointer;
	}

	.menu li a {
		color: white;
		font-size: 16px;
		text-decoration: none;
	}

	.tools > .toggle {
		transform: translateY(0%);
	}

	@media only screen and (max-width: 768px) {
		height: 80px;
		justify-content: flex-end;
		align-items: center;
		top: 0;
		left: 0;
		width: 100vw;
		height: 72px;
		position: absolute;
		display: flex;
		flex-direction: row;
		align-items: center;
		box-shadow: none;

		.logo {
			margin-left: 10px;
		}

		ul {
			display: none;
		}

		.tools {
			background: none;
			align-items: center;
			padding: 0;
			height: 100%;
		}

		.tools div:nth-child(1) {
			display: none;
		}

		.tools div {
			color: black;
			font-size: var(--p-size);
			font-weight: var(--p-weight);
			position: absolute;
			right: 0;
			margin-right: 16px;
		}

		.tools img {
			width: 12.3px;
		}

		.menu {
			margin-top: 80px;
			width: 80px;
		}

		#languages {
			margin-right: 0;
		}

	}
`;

const Navbar = ({ page, navbar, branches, languages }) => {

	const handleBranch = () => {
		const languages = document.querySelector('#languages');
		languages.classList.remove('toggle');
		const branches = document.querySelector('#branches');
		setTimeout(() => {
			branches.classList.toggle('toggle');
		}, 100);
	}

	const handleLanguage = () => {
		const branches = document.querySelector('#branches');
		branches.classList.remove('toggle');
		const languages = document.querySelector('#languages');
		setTimeout(() => {
			languages.classList.toggle('toggle');
		}, 100);
	}

	setTimeout(() => {
		const urlQuery = window.location.search;
		if (urlQuery) {
			setTimeout(() => {
				const newIndex = urlQuery[1];
				smoothScroll(newIndex);
			}, 4000);
		}
		const navItems = document.querySelectorAll('.navbar li');
		const navItemsArr = Array.from(navItems);
		navItemsArr.forEach((item, index) => {
			item.addEventListener('click', () => {
				if (page !== "start") {
					window.location = `/?${index}`;
				}
				else {
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

	return (
		<NavbarStyled>
			<div class="logo">
				<Link href="/"><a href="/"><Logo width="160px"/></a></Link>
			</div>
			<ul className="navbar">
				{
					navbar.map((item, index) => {
						return (
							<li key={index}>{item.text}</li>
						)
					})
				}
			</ul>
			<div className="tools">
				<div onClick={handleBranch}>Branches <img src="../static/data/downarrow_white.svg"/></div>
				<div onClick={handleLanguage}>EN <img src="../static/data/downarrow_white.svg"/></div>
				<ul className="menu" id="branches">
					{
						branches.map((branch, index) => {
							return (
								<li key={index}>
									<Link href={`/branches/${branch.text}`}>
										<a href={`/branches/${branch.text}`}>
											{branch.text}
										</a>
									</Link>
								</li>
							)
						})
					}
				</ul>
				<ul className="menu" id="languages">
					{
						languages.map((language, index) => {
							return (
								<li key={index}>
									<Link href={`/branches`}>
										<a href={`/branches`}>
											{language.text}
										</a>
									</Link>
								</li>
							)
						})
					}
				</ul>
			</div>
		</NavbarStyled>
	);
}

export default Navbar;
