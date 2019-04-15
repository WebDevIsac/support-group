import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Layout from '../components/Layout';
import Branch from '../components/Branch';
import Container from '../components/Container';

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
					<Container>
						<Branch branch={this.props.branch}/>
					</Container>
				</Layout>
			</Fragment>
		);
	}
}

export default branch;