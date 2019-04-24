import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const Layout = dynamic(import('../components/Layout'), {
	ssr: false
});

const projectStyled = styled.div`
	/* display: flex;
	flex-direction: column; */
	height: 100vh;
	width: 100%;
	margin-top: 200px;

`;

class project extends Component {



	static async getInitialProps(context) {
		const slug = context.query.slug;

		// Make request for posts
		const response = await axios.get(`http://localhost:8888/wp-json/wp/v2/projects?slug=${slug}`)

		// Return our only item in array from response to posts object in props
		return {
			project: response.data[0]
		}
	}

	render() {
		const project = this.props.project;
		console.log(project);
		return (
			<Layout>
				<projectStyled>
					<div className="image-placement">
					<img src={project.acf.image}></img>
					<div className="text-placement">
					<p>{project.acf.description}</p>
					<h3>{project.acf.content[0].header}</h3>
					<p>{project.acf.content[0].text}</p>
					<h3>{project.acf.content[1].header}</h3>
					<p>{project.acf.content[1].text}</p>
					</div>
					</div>
				</projectStyled>
		</Layout>
		);
	}
}

export default project;
