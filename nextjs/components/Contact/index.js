import React from 'react';

import styled from 'styled-components';
import Form from './Form';
import Information from './Information';

const ContactContainerStyled = styled.div`
	height: 550px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 200px 0 100px 0;

	h2 {
		position: absolute;
		top: 0;
		left: 0;
		margin-top: 70px;
	}
`;

const ContactContainer = () => {
	return (
		<ContactContainerStyled>
			<h2>Contact</h2>
			<Form/>
			<Information/>
		</ContactContainerStyled>
	);
};

export default ContactContainer;