import React from 'react';
import styled from 'styled-components';

const InstagramFeedStyled = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 150px 0;
	margin: 0 96px;
	margin-top: 80px;

	h1 {
		position: absolute;
		top: 0;
		left: 0;
	}

	iframe {
		border: none; 
		overflow: hidden; 
		width: 100%; 
		height: 658px;
	}

	div {
		/* width: 1344px; */
		text-align: right;
	}

	a {
		color: #777;
		text-decoration: none;
	}

	@media screen and (max-width: 768px) {
		margin: 0 16px;
		padding-bottom: 0;

		iframe {
			width: 100%;
			height: 350px
		}
	}
`;

const InstagramFeed = () => {
	const link = window.innerWidth < 768 ? "https://snapwidget.com/embed/686343" : "https://snapwidget.com/embed/686331"
	return (
		<InstagramFeedStyled>
			<h1>What's going on?</h1>
				<iframe src={link} className="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
			{/* <iframe src="https://snapwidget.com/embed/686297" className="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no"></iframe> */}
		</InstagramFeedStyled>
		
	);
};

export default InstagramFeed;