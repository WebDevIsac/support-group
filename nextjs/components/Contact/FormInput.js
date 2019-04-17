import React, { Component } from 'react';
import styled from 'styled-components';

const FormInputStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: left;
	position: relative;
	font-size: 22px;
	width: 100%;

	input, textarea {
		border: none;
		border-bottom: 3px solid #000;
		height: 36px;
		padding: 10px 25px;
		font-size: 22px;
		outline: 0;
		transition: border 0.2s ease-in;
		background: transparent;
	}

	textarea {
		height: 128px;
		font-family: var(--font-family);
		resize: none;
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

	&.transform label {
		top: 0;
		font-size: var(--p-size);
		transform: translateY(-100%);
		margin-left: 10px;
	}

	textarea + label {
		top: 10%;
		transform: translateY(0);
	}

	.svg-wrapper {
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		pointer-events: none;
		transform: rotateY(180deg) rotateZ(180deg);
	}

	rect {
		position: relative;
		width: 100%;
		stroke-dasharray: 2100%;
		stroke-dashoffset: -2100%;
		stroke-width: 6px;
		fill: transparent;
		stroke: var(--pink);
		transition: stroke-dasharray 2s;
	}

	&.transform .svg-wrapper rect {
		stroke-dasharray: 1700%;
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
				<div class="svg-wrapper">
					<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
						<rect height="100%" width="100%" />
					</svg>
				</div>
				{textarea ? <textarea name={name}></textarea> : <input name={name}></input>}
				<label htmlFor={name}>{label}</label>
			</FormInputStyled>
		);
	}
}

export default FormInput;