import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Projects from './Projects';

// import Section from './Section';

const ActivitiesStyled = styled.div`
	position: relative;
	margin: 25px;
	padding: 160px 0;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(auto, 218px);
	grid-column-gap: 24px;
	grid-row-gap: 100px;

	h1 {
		position: absolute;
		top: 0;
		left: 0;
	}

	div {
		position: relative;
	}

	div::after {
		content: "";
		width: 56px;
		height: 8px;
		background: var(--pink);
		position: absolute;
		top: 0;
		left: 0;
		margin-top: 80px;
	}

	img {
		width: 72px;
		height: 72px;
	}

`;

class Activities extends Component {
	state = {
		activities: []
	}

	componentDidMount() {
		axios.get('http://localhost/wp-json/wp/v2/activities')
		.then(response => {
			this.setState({
				activities: response.data
			});
		});
	}

	render() {
		return (
			<ActivitiesStyled>
				<h1>Activities</h1>
					{
						this.state.activities.map(activity => {
							return (
								<div key={activity.id}>
									<img src={activity.acf.image}></img>
									<h3>{activity.title.rendered}</h3>
									<p>{activity.acf.description}</p>
								</div>
							)
						})
					}
			</ActivitiesStyled>
		)
	}
}

export default Activities;
