import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styled from 'styled-components';

const ProjectsStyled = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	position: relative;
	background: var(--pink);
	padding: 200px 96px 96px 96px;
	margin-top: 100px;

	h1 {
		position: absolute;
		top: 0;
		left: 0;
		margin-top: 60px;
		margin-left: 100px;
		color: white;
	}

	a {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 31.5%;
		height: 124px;
		background: white;
		margin: 14px;
	}

	img {
		max-height: 90%;
		max-width: 60%;
	}

	a:nth-child(2) img {
		width: 388.85px;
		height: 26.69px;
	}

	a:nth-child(3) img {
		width: 171px;
		height: 46.46px;
	}

	a:nth-child(4) img {
		width: 172px;
		height: 105px;
	}

	a:nth-child(5) img {
		width: 177.71px;
		height: 90.24px;
	}



	@media only screen and (max-width: 768px) {
		flex-wrap: nowrap;
		flex-direction: column;
		padding: 150px 0 50px 0;
		width: 100%;
		margin: 0;

		h1 {
			margin: 0;
			margin-left: 24px;
			margin-top: 60px;
		}

		a {
			width: 90%;
			margin: 12px 0;
		}
	}

`;

class Projects extends Component {
	state = {
		projects: []
	}

	componentDidMount() {
		axios.get('http://localhost:8888/wp-json/wp/v2/projects?order=asc')
		.then(response => {
			this.setState({
				projects: response.data
			});
		});
	}
	render() {
		return (
			<ProjectsStyled>
				<h1>Projects</h1>
				{
					this.state.projects.map(project => {
						return <Link href={`/projects/${project.slug}`} key={project.id}><a href={`/projects/${project.slug}`}><img src={project.acf.image}></img></a></Link>
					})
				}
			</ProjectsStyled>
		);
	}
}

export default Projects;
