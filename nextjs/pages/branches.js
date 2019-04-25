import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';

import Layout from '../components/Layout';

class branches extends Component {
	static async getInitialProps() {

		// Make request for posts
		const response = await axios.get(`http://localhost/wp-json/wp/v2/branches`);

		// Return our only item in array from response to posts object in props
		return {
			branches: response.data
		}
	}
	render() {
		return (
			<Layout>
				<h1>This is our branches</h1>
				<ul>
					{this.props.branches.map(branch => {
						return (
							<Link href={`/branches/${branch.slug}`}>{branch.title.rendered}</Link>
						)
					})}
				</ul>
			</Layout>
		)
	}
}

export default branches;
