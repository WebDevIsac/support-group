import React from 'react';
import styled from 'styled-components';

const InformationStyled = styled.div`
	height: 506px;
	width: 45%;

	section, aside {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		position: relative;
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
		max-height: 25px;
		margin-right: 40px;
	}
	
	section div:nth-child(1) img, section div:nth-child(2) img {
		width: 18px;
		max-height: 18px;
	}

	section div:nth-child(3) img {
		height: 18px;
		width: auto;
	}

	section div:last-child {
		margin-top: 40px;
		margin-bottom: 30px
	}

	section div:last-child img {
		margin-right: 24px;
	}

	section div:nth-child(4) img:nth-child(1) {
		height: 24px;
		width: auto;
	}
 
	aside img {
		width: 85px;
		height: 85px;
		max-height: 85px;
		margin: 10px 0;
		margin-right: 30px;
	}

	aside img:first-child {
		width: 40px;
		height: 40px;
	}

	@media only screen and (max-width: 768px) {
		width: 100%;
		margin: 70px 16px 0 16px;

		section {
			justify-content: space-between;
		}

		section div {
			text-align: left;
		}

	}
`;

const Information = () => {
	return (
		<InformationStyled id="4">
			<section>
				<div><img src="../../static/data/home_black.svg"></img>Kungsladugårdsvägen 5 <br/>Restad Gård, 462 54 Vänersborg, Sweden</div>
				<div><img src="../../static/data/phone_black.svg"></img>+4676-884 08 84</div>
				<div><img src="../../static/data/mail_black.svg"></img>info@supportgroup.se</div>
				<div>
					<img src="../../static/data/social/YT_black.svg"></img><img src="../../static/data/social/Facebook_black.svg"></img>
					<img src="../../static/data/social/Instagram_black.svg"></img><img src="../../static/data/social/Twitter_black.svg"></img>
				</div>
			</section>
			<aside>
				<h3>Support us with swish</h3>
				<div><img src="../../static/data/swish.svg"></img>123 223 37 32</div>
				<img src="../../static/data/swish_QR.png"></img>
			</aside>
		</InformationStyled>
	)
}

export default Information;
