import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Layout from '../components/Layout';

class branch extends Component {

	static async getInitialProps(context) {
		const slug = context.query.slug;
		
		// Make request for posts
		const response = await axios.get(`http://localhost/wp-json/wp/v2/branches?slug=${slug}`);

		// Return our only item in array from response to posts object in props
		return {
			branch: response.data[0]
		}
	}

	render() {
		return (
			<Fragment>
				<Layout>
					<h1>Hello</h1>
				</Layout>
			</Fragment>
		);
	}
}

export default branch;