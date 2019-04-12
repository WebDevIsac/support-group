import React from 'react';
import styled from 'styled-components';

const BranchStyled = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 120px 0;

	div {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	main {
		width: 600px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
	}

	main section {
		align-self: center;
		width: 500px;
		height: 500px;
		transform: scale(1.2);
		margin: 80px 0;
		background: #fff;
	}
`;

const Branch = ({ branch }) => {
	return (
		<BranchStyled>
			<div>
				<h1>{branch.title.rendered}</h1>
			</div>
			<main>
				<h2>{branch.acf.text}:</h2>
				<section className="fb-page" data-href="https://www.facebook.com/SupportRestadGard/" data-tabs="timeline,events" data-width="500" 
					data-height="500" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
					<blockquote cite="https://www.facebook.com/SupportRestadGard/" className="fb-xfbml-parse-ignore">
						<a href="https://www.facebook.com/SupportRestadGard/"></a>
					</blockquote>
				</section>
			</main>
		</BranchStyled>
	);
};

export default Branch;