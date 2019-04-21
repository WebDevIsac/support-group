import React from 'react';
import styled from 'styled-components';

const InformationStyled = styled.div`
	height: 100%;
	width: 45%;

	section, aside {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
	}

	section {
		margin-bottom: 150px;
	}

	section div, aside div {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px 0;
		font-weight: var(--p-weight);
	}

	section img, aside img {
		width: 25px;
		margin-right: 30px;
	}

	@media only screen and (max-width: 768px) {
		width: 90%;
	}
`;

const Information = () => {
	return (
		<InformationStyled>
			<section>
				<div><img src="../../static/data/home.png"></img>Kungsladugårdsvägen 5 <br/>Restad Gård, 462 54 Vänersborg, Sweden</div>
				<div><img src="../../static/data/phone.png"></img>+4676-884 08 84</div>
				<div><img src="../../static/data/letter.png"></img>info@supportgroup.se</div>
				<div>
					<img src="../../static/data/youtube.png"></img><img src="../../static/data/facebook.png"></img>
					<img src="../../static/data/instagram.png"></img><img src="../../static/data/twitter.png"></img>
				</div>
			</section>
			<aside>
				<h3>Support us with swish</h3>
				<div><img src="../../static/data/swish.png"></img>123 223 37 32</div>
				<img></img>
			</aside>
		</InformationStyled>
	)
}

export default Information;
