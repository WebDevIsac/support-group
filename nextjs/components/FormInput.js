import React, { Component } from 'react';
import styled from 'styled-components';

const FormInputStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: left;
	position: relative;
	font-size: 22px;

	input, textarea {
		width: 660px;
		height: 56px;
		border: 4px solid var(--pink);
		padding: 10px 25px;
		font-size: 22px;
		outline: 0;
	}
	
	textarea {
		height: 128px;
		font-family: var(--font-family);
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

	label.transform {
		top: 0;
		font-size: var(--p-size);
		transform: translateY(-100%);
		margin-left: 10px;
	}

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
				const found = labelsArray.find(label => label.htmlFor === e.target.name);
				found.classList.add('transform');
			})
			input.addEventListener('focusout', (e) => {
				if (e.target.value === "") {
					const found = labelsArray.find(label => label.htmlFor === e.target.name);
					found.classList.remove('transform');
				}
			})
		});
	
		textarea.addEventListener('focus', (e) => {
			const found = labelsArray.find(label => label.htmlFor === e.target.name);
			found.classList.add('transform');
		});
	
		textarea.addEventListener('focusout', (e) => {
			if (e.target.value === "") {
				const found = labelsArray.find(label => label.htmlFor === e.target.name);
				found.classList.remove('transform');
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