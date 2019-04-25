import React from 'react';
import styled from 'styled-components';

const FacebookFeedStyled = styled.div`
	width: 100%;
	padding: 150px 0;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: relative;

	h2 {
		position: absolute;
		top: 0;
		left: 0;
		margin-left: 96px;
	}

	section {
		align-self: center;
		width: 500px;
		height: 500px;
		transform: scale(1.2);
		background: #fff;
	}

	iframe {
		height: 100%;
		width: 600px;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding-bottom: 0;

		h2 {
			margin-left: 16px;
		}

		section {
			width: 100%;
			height: 100%;
			transform: scale(1);
		}

		iframe {
			width: 100%;
			height: 386px;
		}
	}
`;

const FacebookFeed = () => {
	return (
		<FacebookFeedStyled>
			<h2>Latest News:</h2>
			<section className="fb-page" data-href="https://www.facebook.com/SupportRestadGard/" data-tabs="timeline,events" data-width="500" 
				data-height="500" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
				<blockquote cite="https://www.facebook.com/SupportRestadGard/" className="fb-xfbml-parse-ignore">
					<a href="https://www.facebook.com/SupportRestadGard/"></a>
				</blockquote>
			</section>
		</FacebookFeedStyled>
	);
};

export default FacebookFeed;