import React, { Component } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';

const Layout = dynamic(import('../components/Layout'), {
	ssr: false
});
const Support = dynamic(import('../components/Support'), {
	ssr: false
});
const CardContainer = dynamic(import('../components/CardContainer'), {
	ssr: false
});
const Box = dynamic(import('../components/Box'), {
	ssr: false
});
const Contact = dynamic(import('../components/Contact'), {
	ssr: false
});
const Activities = dynamic(import('../components/Activities'), {
	ssr: false
});
const Projects = dynamic(import('../components/Projects'), {
	ssr: false
});
const Partners = dynamic(import('../components/Partners'), {
	ssr: false
});

class index extends Component {

	state = {
		contents: [],
		cards: [],
		activities: []
	}

	componentDidMount() {
		axios.get('http://localhost/wp-json/wp/v2/sites?slug=start')
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
