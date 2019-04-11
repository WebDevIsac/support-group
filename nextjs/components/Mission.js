import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import MissionCard from './MissionCard';

const MissionStyled = styled.div`
	z-index: 0;
	height: 100vh;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	/* ::before {
		content: "";
		position: absolute;
		bottom: 0px;
		left: -50px;
		right: -50px;
		border-bottom: 10px solid #FE5A67;
	} */
`;

class Mission extends Component {
	
	state = {
		missions: []
	}

	componentDidMount() {
		axios.get('http://localhost/wp-json/wp/v2/missions')
		.then(response => {
			this.setState({
				missions: response.data
			})
		})
	}

	render() {
		return (
			<MissionStyled>
				{this.state.missions.map(mission => {
					return (
						<MissionCard mission={mission} key={mission.id}/>
					)
				})}
			</MissionStyled>
		)
	}
};

export default Mission;