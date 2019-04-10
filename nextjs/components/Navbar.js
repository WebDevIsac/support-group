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
		align-items: center;
		width: 75%;
		padding-inline-start: 0;
		margin-left: 50px;
	}

	ul a {
		color: black;
		text-decoration: none;
		font-weight: bold;
		font-size: 20px;
	}

	ul li {
		list-style-type: none;
	}

	.tools {
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 20%;
		background: var(--pink);
	}

	.tools div {
		display: inline-block;
		cursor: pointer;
	}


	.branches {
		position: fixed;
		top: 0;
		right: 0;
		width: 100px;
		margin-top: 80px;
		margin-right: 5%;
		padding: 10px 25px;
		background: lightgrey;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		transition: transform 0.5s ease-in;
		transform: translateY(-130%);

	}

	.branches li {
		margin: 10px 0;
		cursor: pointer;
	}

	.branches li a {
		font-size: 16px;
	}

	.tools > .toggle {
		transform: translateY(0%);
	}
`;

class Navbar extends Component {
	
	state = {
		language: "EN",
		branches: []
	}

	componentDidMount () {
		axios.get('http://localhost/wp-json/wp/v2/branches')
		.then(response => {
			this.setState({
				branches: response.data
			});
		});

	}

	render() {

		const changeLanguage = (e) => {
			this.setState({
				language: "SV"
			});
		}

		const handleBranch = () => {
			const branches = document.querySelector('#branches');
			branches.classList.toggle('toggle');
		}

		return (
			<NavbarStyled>
				<ul>
					<Link href="/"><a href="/"><Logo width="160px"/></a></Link>
					<a href="/"><li>What we do</li></a>
					<a href="/"><li>About us</li></a>
					<a href="/"><li>Activities</li></a>
					<a href="/"><li>Contact</li></a>
					<a href="/"><li>Support us</li></a>
				</ul>
				<div className="tools">
					<div onClick={handleBranch}>Branches &#9207;</div>
					<div>{this.state.language} &#9207;</div>
					<ul className="branches" id="branches">
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
				</div>
			</NavbarStyled>
		);
	}
}

export default Navbar;