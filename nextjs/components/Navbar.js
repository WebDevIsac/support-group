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
	background: #f4f4f4;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);

	.logo {
		position: absolute;
		top: 0;
		left: 0;
		margin: 24px 0px 24px 100px;
	}

	img {
		width: 10px;
		height: 10px;
	}

	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		width: 65%;
		padding-inline-start: 0;
		margin-block-start: 0;
		margin-block-end: 0;
		margin-left: 320px;
		margin-right: 150px;
		height: 60px;
	}

	ul a {
		color: black;
		text-decoration: none;
		font-weight: bold;
		font-size: var(--h3-size);
		font-weight: var(--h3-weight);
	}

	ul li {
		list-style-type: none;
	}

	.tools {
		height: 60px;
		padding: 20px 40px;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		width: 15%;
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
		width: 100px;
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
		margin-left: 10px;
	}

	#languages {
		right: 0;
		margin-right: 40px;
	}

	.menu li {
		margin: 10px 0;
		cursor: pointer;
	}

	.menu li a {
		color: white;
		font-size: 16px;
	}

	.tools > .toggle {
		transform: translateY(0%);
	}

	@media only screen and (max-width: 768px) {
		height: 80px;
		justify-content: flex-end;
		align-items: center;

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

const Navbar = ({ navbar, branches, languages }) => {
	
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

	

	return (
		<NavbarStyled>
			<div class="logo">
				<Link href="/"><a href="/"><Logo width="160px"/></a></Link>
			</div>
			<ul className="navbar">
				{
					navbar.map((item, index) => {
						return (
							<a href="/" key={index}><li>{item.text}</li></a>
						)
					})
				}
			</ul>
			<div className="tools">
				<div onClick={handleBranch}>Branches &#9207;</div>
				<div onClick={handleLanguage}>EN &#9207;</div>
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
