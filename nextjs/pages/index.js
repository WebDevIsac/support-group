import React, { Component } from 'react';
import axios from 'axios';

import Layout from '../components/Layout';
import Support from '../components/Support';
import CardContainer from '../components/CardContainer';
import Box from '../components/Box';
import Contact from '../components/Contact';
import Activities from '../components/Activities';
import Projects from '../components/Projects';
import Partners from '../components/Partners';

class index extends Component {

	state = {
		contents: [],
		cards: [],
		activities: []
	}

	componentDidMount() {
		axios.get('http://localhost:8888/wp-json/wp/v2/sites?slug=start')
		.then(response => {
			this.setState({
				content: response.data[0].acf,
				activities: response.data[0].acf.activities
			});
		});
	}

	render() {
		return (
			<Layout page="start">
				<Support/>
				<CardContainer/>
				<Box/>
				<Activities activities={this.state.activities}/>
				<Projects/>
				<Contact/>
				<Partners/>
			</Layout>
		)
	}
}

export default index;
