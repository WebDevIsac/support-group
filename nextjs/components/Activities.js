import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Projects from './Projects';

// import Section from './Section';

const ActivitiesStyled = styled.div`
	position: relative;
	margin: 40px 96px;

	h1 {
		position: absolute;
		top: 0;
		left: 0;
	}

	main {
		padding: 160px 0 0 0;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(auto, 218px);
		grid-column-gap: 24px;
		grid-row-gap: 100px;
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

	@media only screen and (max-width: 768px) {

		margin: 0 16px;
		padding: 40px 0 60px 0;

		main {
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			padding: 0;
			overflow-x: auto;
		}

		div {
			min-width: 196px;
			margin-left: 32px;
		}

		div:first-child {
			margin-left: 0;
		}

		h1 {
			position: sticky;
			margin-block-start: 0;
    		/* margin-block-end: 0; */
		}
	}
`;

class Activities extends Component {

	state = {
		activities: [],
		isFetched: false
	}

	componentDidMount() {
		axios.get('http://localhost/wp-json/wp/v2/activities?order=asc')
		.then(response => {
			let filtered = response.data.filter(activity => {
				return this.props.activities.find(id => activity.id === id);
			});
			this.setState({
				activities: filtered,
			});
			setTimeout(() => {
				this.setState({
					isFetched: true
				});
			}, 1000);
		});
	}



render() {


		return (
			<ActivitiesStyled className="activities" id="2">
				<h1>Activities</h1>
				<main>
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
				</main>
			</ActivitiesStyled>
		)
	}
}

export default Activities;
