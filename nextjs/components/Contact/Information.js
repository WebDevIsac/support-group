import React from 'react';
import styled from 'styled-components';

const InformationStyled = styled.div`
	height: 100%;
	width: 45%;

	ul {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
	}

	ul li {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px 0;
	}

	ul img {
		width: 25px;
		margin-right: 30px;
	}

`;

const Information = () => {
	return (
		<InformationStyled>
			<ul>
				<li><img src="../../static/data/home.png"></img>Kungsladugårdsvägen 5 Restad Gård, 462 54 Vänersborg, Sweden</li>
				<li><img src="../../static/data/phone.png"></img>+4676-884 08 84</li>
				<li><img src="../../static/data/letter.png"></img>info@supportgroup.se</li>
				<li>
					<img src="../../static/data/youtube.png"></img><img src="../../static/data/facebook.png"></img>
					<img src="../../static/data/instagram.png"></img><img src="../../static/data/twitter.png"></img>
				</li>
			</ul>
		</InformationStyled>
	)
}

export default Information;
