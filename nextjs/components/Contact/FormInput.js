import React, { Component } from 'react';
import styled from 'styled-components';

const FormInputStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: left;
	position: relative;
	font-size: 22px;
	width: 75%;

	/* ::before {
		display: block;
		position: absolute;
		left: 0;
		bottom: 0;
		content: "";
		width: 4px;
		height: 50%;
		background: #000;
		transition: background 0.2s ease-in;

	}

	::after {
		display: block;
		position: absolute;
		right: 0;
		bottom: 0;
		content: "";
		width: 4px;
		height: 50%;
		margin-right: -58px;
		background: #000;
		transition: background 0.2s ease-in;

	} */

	input, textarea {
		border: 4px solid var(--background-greyish);
		width: 100%;
		height: 36px;
		padding: 10px 25px;
		font-size: 22px;
		outline: 0;
		transition: border 0.2s ease-in;
	}

	input {
		border-bottom: 4px solid #000;
	}

	
	textarea {
		height: 128px;
		font-family: var(--font-family);
		resize: none;
		border: 4px solid #000;
	}
	
	label {
		position: absolute;
		top: 50%;
		left: 0;
		margin-left: 25px;
		transform: translateY(-50%);
		pointer-events: none;
		transition: .5s cubic-bezier(.165,.84,.44,1), color .5s cubic-bezier(.165,.84,.44,1), opacity .8s cubic-bezier(.165,.84,.44,1) 0.7s;
	}

	&.transform::before, &.transform::after {
		background: var(--pink);
	}

	&.transform label {
		top: 0;
		font-size: var(--p-size);
		transform: translateY(-100%);
		margin-left: 10px;
	}

	&.transform input {
		border-bottom: 4px solid var(--pink);
	}

	&.transform textarea {
		border: 4px solid var(--pink);
	}

	/* &.transform div {
		background: var(--pink);
	} */

	textarea + label {
		top: 10%;
		transform: translateY(0);
	}
`;

class FormInput extends Component {
	componentDidMount() {
		const inputs = document.querySelectorAll('form input');
		const textarea = document.querySelector('form textarea');
		const labels = document.querySelectorAll('form label');
		const labelsArray = Array.from(labels);
		
		
		inputs.forEach(input => {
			input.addEventListener('focus', (e) => {
				const findLabel = labelsArray.find(label => label.htmlFor === e.target.name);
				const parent = findLabel.parentNode;
				parent.classList.add('transform');
			})
			input.addEventListener('focusout', (e) => {
				if (e.target.value === "") {
					const findLabel = labelsArray.find(label => label.htmlFor === e.target.name);
					const parent = findLabel.parentNode;
					parent.classList.remove('transform');
				}
			})
		});
	
		textarea.addEventListener('focus', (e) => {
			const findLabel = labelsArray.find(label => label.htmlFor === e.target.name);
			const parent = findLabel.parentNode;
			parent.classList.add('transform');
		});
	
		textarea.addEventListener('focusout', (e) => {
			if (e.target.value === "") {
				const findLabel = labelsArray.find(label => label.htmlFor === e.target.name);
				const parent = findLabel.parentNode;
				parent.classList.remove('transform');
			}
		});
		
	}
	render() {
		const {textarea, label, name} = this.props;
		return (
			<FormInputStyled>
				{textarea ? <textarea name={name}></textarea> : <input name={name}></input>}
				<label htmlFor={name}>{label}</label>
			</FormInputStyled>
		);
	}
}

export default FormInput;