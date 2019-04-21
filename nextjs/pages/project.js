import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Layout from '../components/Layout';

const projectStyled = styled.div`

	display: flex;
	flex-direction: column;
	margin-top: 100px;

	img {
		
	}
`;

class project extends Component {

	

	static async getInitialProps(context) {
		const slug = context.query.slug;

		// Make request for posts
		const response = await axios.get(`http://localhost/wp-json/wp/v2/projects?slug=${slug}`)

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
					<img className="image" src={project.acf.image}></img>
				</projectStyled>
		</Layout>
		);
	}
}

export default project;
