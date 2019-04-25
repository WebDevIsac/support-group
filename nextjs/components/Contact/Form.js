import React, { Component } from 'react';
import styled from 'styled-components';

import FormInput from './FormInput';
import Confirmation from './Confirmation';

const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: left;
	height: 506px;
	padding-bottom: 50px;
	width: 40%;
	position: relative;

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

	button {
		position: absolute;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		width: 128px;
		height: 48px;
		outline: 0;
		border: none;
		background: var(--pink);
		padding: 12px 16px;
		color: white;
		font-size: var(--button-size);
		cursor: pointer;
	}

	button img {
		width: 32px;
		height: 12,6px;
		margin-left: 26px;
	}

	@media only screen and (max-width: 768px) {
		width: 100%;
		margin: 0;

		.radio {
			margin: 12px 0;
		}
	}
`;



class Form extends Component {
	state = {
		display: "none"
	}
	
	updateInput = () => {
	
	}
	
	
	updateRadio = (e) => {
		let element = e.target;
		while(element.tagName !== "DIV") {
			element = element.parentNode;
		}
		const radio = element.querySelector('input');
		const span = element.querySelector('span');
	
		radio.checked = true;
		span.classList.add('checked');
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			display: "flex"
		})
		setTimeout(() => {
			this.setState({
				display: "none"
			})
		}, 3000);
	}
	render() {
		return (
			<FormStyled action="/" method="post" onSubmit={this.handleSubmit}>
				<FormInput label="Name" name="name" update={this.updateInput}/>
				<FormInput label="Email" name="email" update={this.updateInput}/>
				<FormInput label="Message" name="message" textarea={true} update={this.updateInput}/>
				<div className="radio"  onClick={this.updateRadio}>
					<input type="radio"></input>
					<span></span>
					<label>I'm a supporter and wanna come in contact with SGN</label>
				</div>
				<div className="radio"  onClick={this.updateRadio}>
					<input type="radio"></input>
					<span ></span>
					<label>I want to become member of SGN</label>
				</div>
				<button type="submit">Send <img src="../../static/data/arrow_white.svg"/></button>
				<Confirmation display={this.state.display}/>
			</FormStyled>
		);
	}
};

export default Form;