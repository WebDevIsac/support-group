import React from 'react';

import styled from 'styled-components';
import Arrow from './Arrow';

const SupportStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: left;
	height: 600px;
	padding: 150px 100px;

	h1 {
		font-size: 65px;
		width: 570px;
		font-weight: 900;
	}

	div {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 230px;
		height: 50px;
		background: #FE5A67;
		text-transform: uppercase;
		font-size: 24px;
		font-weight: bold;
		padding: 0 5px;
		color: #fff;
	}
`;

const Support = () => {
	return (
		<SupportStyled>
			<h1>Working together for a better future</h1>
			<div>Support us <Arrow/></div>
		</SupportStyled>
	);
};

export default Support;