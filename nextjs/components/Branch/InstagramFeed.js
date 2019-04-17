import React from 'react';
import styled from 'styled-components';

const InstagramFeedStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 110px;
	position: relative;
	padding: 150px 0;

	h1 {
		position: absolute;
	}


	div {
		background: red;
		width: 50px;
		height: 50px;
	}
`;

const InstagramFeed = () => {
	return (
		<InstagramFeedStyled>
			<h1>What's going on?</h1>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
			<div>Hello</div>
		</InstagramFeedStyled>
	);
};

export default InstagramFeed;