import React from 'react';
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

	::before {
		content: "";
		position: absolute;
		bottom: 0px;
		left: -50px;
		right: -50px;
		border-bottom: 10px solid #FE5A67;
	}
`;

const Mission = () => {
	const cards = [
		{
			image: "/static/data/1.jpg",
			title: "Our mission is to", 
			text: ["Empower and encourage refugees and migrants own initiatives and support them in all fields.", 
			"Cooperate with other organizations and groups in Sweden and abroad that have the same objectives.", 
			"To encourage the local communities and civil society to connect to the Local Support Groups.", 
			"Provides understanding of the norms of society to contribute to integration, inclusion and coexistence."], 
		},
		{
			image: "/static/data/2.jpeg", 
			title:`Encourage & support`,
			text: ["Our vision is to work with associations and individuals who want to empower and help asylum seekers, refugees, immigrants and migrants around the world.", 
			"Through encouraging their own initiatives, and helping them to establish local support groups in their areas of living. By supporting them and gather advocacy for their cases in all fields."],
		},
		{
			image: "/static/data/3.jpg", 
			title: "Actions",
			text: ["Provide insight and understanding of the Swedish society and create opportunities.",
				"Initiate and create cultural activities and sports.",				
				"Identify different professions to create working contacts.",				
				"Initiate and offer various forms of workshops and education for everyone."],
		}
	]
	return (
		<MissionStyled>
			{cards.map(card => {
				return (
					<MissionCard card={card}/>
				)
			})}
		</MissionStyled>
	);
};

export default Mission;