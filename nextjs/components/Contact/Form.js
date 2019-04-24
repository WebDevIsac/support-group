import React, { useState } from 'react';

import FormInput from './FormInput';
import styled from 'styled-components';

const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: left;
	height: 100%;
	width: 40%;

	.radio {
		position: relative;
		display: inline-block;
		flex-direction: row;
		align-items: center;
		cursor: pointer;
		padding: 10px;
	}
	
	.radio label {
		display: block;
		cursor: pointer;
		margin-left: 35px;
	}

	.radio input {
		width: 0;
		display: none;
	}

	.radio span {
		position: absolute;
		top: 0;
		left: 0;
		width: 25px;
		height: 25px;
		margin-top: 5px;
		border: 2px solid black;
		border-radius: 100%;
	}

	.radio span.checked {
		background: var(--pink);
		border-color: var(--pink);
	}

	@media only screen and (max-width: 768px) {
		width: 90%;

		.radio {
			margin: 12px 0;
		}
	}
`;

const updateInput = () => {

}

const updateRadio = (e) => {
	let element = e.target;
	while(element.tagName !== "DIV") {
		element = element.parentNode;
	}
	const radio = element.querySelector('input');
	const span = element.querySelector('span');

	radio.checked = true;
	span.classList.add('checked');
}


const Form = () => {
    return (
        <FormStyled>
			<FormInput label="Name" name="name" update={updateInput}/>
			<FormInput label="Email" name="email" update={updateInput}/>
			<FormInput label="Message" name="message" textarea={true} update={updateInput}/>
			<div className="radio"  onClick={updateRadio}>
				<input type="radio"></input>
				<span></span>
				<label>I'm a supporter and wanna come in contact with SGN</label>
			</div>
			<div className="radio"  onClick={updateRadio}>
				<input type="radio"></input>
				<span ></span>
				<label>I want to become member of SGN</label>
			</div>
		</FormStyled>
    );
};

export default Form;