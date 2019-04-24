import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Projects from './Projects';
import { css, value } from 'popmotion';

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

		margin: 40px 16px;

		main {
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			padding: 0;
			overflow: hidden;
			overflow-x: scroll;
		}

		div {
			min-width: 196px;
			margin-left: 16px;
		}

		div:first-child {
			margin-left: 0;
		}

		h1 {
			position: sticky;
			margin-block-start: 0;
    		margin-block-end: 0;
		}



		body {
			align-items: center;
			background: #E3E3E3;
			display: flex;
			height: 100vh;
			justify-content: center;
		}

		/* @mixin white-gradient {
			background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
		}

		$animationSpeed: 40s;

		// Animation
		@keyframes scroll {
			0% { transform: translateX(0); }
			100% { transform: translateX(calc(-250px * 7))}
		}


		// Styling
		.slider {
			background: white;
			box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
			height: 100px;
			margin: auto;
			overflow:hidden;
			position: relative;
			width: 960px;
			
			&::before,
			&::after {
				@include white-gradient;
				content: "";
				height: 100px;
				position: absolute;
				width: 200px;
				z-index: 2;
			}
			
			&::after {
				right: 0;
				top: 0;
				transform: rotateZ(180deg);
			}

			&::before {
				left: 0;
				top: 0;
			}
			
			.slide-track {
				animation: scroll 40s linear infinite;
				display: flex;
				width: calc(250px * 14);
			}
			
			.slide {
				height: 100px;
				width: 250px;
			}
		} */





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

	getTotalItemsWidth = (items) => {
		const { left } = items[0].getBoundingClientRect();
		const { right } = items[items.length - 1].getBoundingClientRect();
		return right - left;
	}

	carousel = (container) => {
		// const slider = container.querySelector('main');
		// const items = slider.querySelectorAll('div');

		// const sliderVisibleWidth = slider.offsetWidth;
		// const totalItemsWidth = this.getTotalItemsWidth(items);
		
		// const maxXOffset = 0;
		// const minXOffset = - (totalItemsWidth - sliderVisibleWidth);
		// // console.log(css(slider));
		// const sliderRenderer = css(slider);
		
		// const sliderX = value(0, (x) => sliderRenderer.set('x', x));
		// console.log(sliderX);
		// sliderX.set(-100)
	}

render() {
	
		if (this.state.isFetched) {
			this.carousel(document.querySelector('.activities'));
		}

		
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
