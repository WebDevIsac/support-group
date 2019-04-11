import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Logo from './Logo';

import styled from 'styled-components';

const NavbarStyled = styled.nav`
	z-index: 10;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100px;
	background: #f4f4f4;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);

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
		margin-left: 50px;
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
		padding: 20px 0;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-end;
		width: 20%;
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
		margin-top: 90px;
		margin-left: -20px;
		padding: 10px 25px;
		background: #212121;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		transition: transform 0.2s ease-in;
		transform: translateY(-130%);
	}

	#branches {
		left: 0;
	}

	#languages {
		right: 0;
		margin-right: 20px;
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
`;

class Navbar extends Component {
	
	state = {
		language: "EN",
		menu: [],
		branches: [],
		languages: []
	}

	componentDidMount () {
		axios.get('http://localhost/wp-json/wp/v2/pages')
		.then(response => {
			this.setState({
				menu: response.data
			});
		});

		axios.get('http://localhost/wp-json/wp/v2/branches')
		.then(response => {
			this.setState({
				branches: response.data
			});
		});

		axios.get('http://localhost/wp-json/wp/v2/languages?order=asc')
		.then(response => {
			this.setState({
				languages: response.data
			})
		})
	}

	render() {

		const changeLanguage = (e) => {
			this.setState({
				language: "SV"
			});
		}

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
				<ul>
					<Link href="/"><a href="/"><Logo width="160px"/></a></Link>
					{
						this.state.menu.map(item => {
							return (
								<a href="/" key={item.id}><li>{item.title.rendered}</li></a>
							)
						})
					}
				</ul>
				<div className="tools">
					<div onClick={handleBranch}>Branches &#9207;</div>
					<div onClick={handleLanguage}>{this.state.language} &#9207;</div>
					<ul className="menu" id="branches">
						{
							this.state.branches.map(branch => {
								return (
									<li key={branch.id}>
										<Link href={`/branches/${branch.slug}`}>
											<a href={`/branches/${branch.slug}`}>
												{branch.title.rendered}
											</a>
										</Link>
									</li>
								)
							})
						}
					</ul>
					<ul className="menu" id="languages">
						{
							this.state.languages.map(language => {
								return (
									<li key={language.id}>
										<Link href={`/branches`}>
											<a href={`/branches`}>
												{language.title.rendered}
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
}

export default Navbar;