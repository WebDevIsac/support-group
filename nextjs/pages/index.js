import React, { Component } from 'react';
import axios from 'axios';

import Layout from '../components/Layout';
import Support from '../components/Support';
import CardContainer from '../components/CardContainer';
import Box from '../components/Box';
import Contact from '../components/Contact';
import Activities from '../components/Activities';

class index extends Component {

	state = {
		contents: [],
		cards: [],
		activities: []
	}

	async componentDidMount() {
		axios.get('http://localhost/wp-json/wp/v2/sites?slug=start')
		.then(response => {
			const data = response.data[0].acf;

			data.cards.map(card => {
				axios.get(`http://localhost/wp-json/wp/v2/cards?slug=${card.post_name}`)
				.then(responseCards => {
					this.setState({
						cards: [...this.state.cards, responseCards]
					});
				});
			});
			
			data.contents.map(content => {
				axios.get(`http://localhost/wp-json/wp/v2/contents?slug=${content.post_name}`)
				.then(responseContents => {
					this.setState({
						contents: [...this.state.contents, responseContents]
					});
				});
			});

			data.activities.map(activity => {
				axios.get(`http://localhost/wp-json/wp/v2/activities?slug=${activity.post_name}`)
				.then(responseActivity => {
					this.setState({
						activities: [...this.state.activities, responseActivity],
					});
				});
			});
		});
	}

	render() {
		console.log(this.state.isFetched);
		if (this.state.contents.length === 0 || this.state.activities.length === 0 || !this.state.cards.length === 0) {
			return <h1 style={{textAlign:'center'}}>Loading...</h1>
		}
		return (
			<Layout page="start" isFetched={this.state.isFetched}>
				<Support text={this.state.contents.filter(item => item.data[0].slug === "first")}/>
				{/* <CardContainer cards={this.state.cards}/> */}
				{/* <Box/> */}
				{/* <Contact/> */}
				{/* <Activities/> */}
			</Layout>
		)
	}
}

export default index;