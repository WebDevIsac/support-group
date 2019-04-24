import React, { Component } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';

const Layout = dynamic(import('../components/Layout'), {
	ssr: false
});
const Branch = dynamic(import('../components/Branch'), {
	ssr: false
});

class branch extends Component {

	static async getInitialProps(context) {
		const slug = context.query.slug;

		// Make request for posts
		const response = await axios.get(`http://localhost:8888/wp-json/wp/v2/branches?slug=${slug}`);

		// Return our only item in array from response to posts object in props
		return {
			branch: response.data[0]
		}
	}

	render() {
		return (
			<Layout>
				<Branch branch={this.props.branch}/>
			</Layout>
		);
	}
}

export default branch;
