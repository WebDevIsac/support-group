import React from 'react';

import styled from 'styled-components';
import Form from './Form';
import Information from './Information';

const ContactContainerStyled = styled.div`
	height: 100%;
	padding: 255px 96px 96px 96px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	position: relative;
	padding-top: 255px;
	background: var(--mist);

	h1 {
		position: absolute;
		top: 0;
		left: 0;
		margin-top: 96px;
		margin-left: 96px;
	}

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		height: 90%;
		padding: 150px 16px 100px 16px;
		text-align: center;

		h1 {
			margin-top: 72px;
			margin-left: 0;
			width: 100%;
			text-align: center;
		}
	}
`;

const ContactContainer = () => {
	return (
		<ContactContainerStyled id="3">
			<h1>Contact</h1>
			<Form/>
			<Information/>
		</ContactContainerStyled>
	);
};

export default ContactContainer;