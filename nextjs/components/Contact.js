import React from 'react';

import styled from 'styled-components';
import FormInput from './FormInput';

const ContactContainerStyled = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	> div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 60%;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: left;
		height: 100%;
	}
`;

const ContactContainer = () => {
	return (
		<ContactContainerStyled>
			<h2>Contact</h2>
			<div>
				<form>
					<FormInput label="Name" name="name"/>
					<FormInput label="Email" name="email"/>
					<FormInput label="Message" name="message" textarea={true}/>
					<input type="radio"></input>
					<label>I'm a supporter and wanna come in contact with SGN</label>
					<input type="radio"></input>
					<label>I'm a become member of SGN</label>
				</form>
				<div className="information">

				</div>
			</div>
		</ContactContainerStyled>
	);
};

export default ContactContainer;