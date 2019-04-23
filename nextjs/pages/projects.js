import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';

import Layout from '../components/Layout';

class projects extends Component {
	static async getInitialProps() {
		// Make request for posts
		const response = await axios.get(`http://localhost:8888/wp-json/wp/v2/projects`);

		// Return our only item in array from response to posts object in props
		return {
			projects: response.data
		}
	}
	render() {
		console.log(this.props.projects);
		return (
			<Layout>
				<div className="image-placement">
				<h1>This is our projects</h1>
				<ul>
					{this.props.projects.map(project => {
						return (
							<Link href={`/projects/${project.slug}`}><a href={`/projects/${project.slug}`}>{project.title.rendered}</a></Link>
						)
					})}
				</ul>
				</div>
			</Layout>
		)
	}
}

export default projects;
