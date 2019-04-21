import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ProjectsStyled = styled.div`
	width: 100%;
	margin-left: -100px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	position: relative;
	background: var(--pink);
	padding: 200px 100px;

	h1 {
		position: absolute;
		top: 0;
		left: 0;
		margin-top: 60px;
		margin-left: 100px;
		color: white;
	}

	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 30%;
		height: 124px;
		background: white;
		margin: 12px;
	}

	img {
		max-height: 100%;
		max-width: 70%;
	}

`;

class Projects extends Component {

	state = {
		projects: []
	}

	componentDidMount() {
		axios.get('http://localhost:8888/wp-json/wp/v2/projects')
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
						return <div key={project.id}><img src={project.acf.image}></img></div>
					})
				}
			</ProjectsStyled>
		);
	}
}

export default Projects;
