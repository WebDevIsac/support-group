import React from 'react';
import styled from 'styled-components';

const ConfirmationStyled = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--pink);
	opacity: 0.57;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		width: 132px;
	}

	h3 {
		color: white;
	}

	@media screen and (max-width: 768px) {
		width: 100vw;
		margin-left: -16px;

		h3 {
			width: 70%;
		}
	}
`;

const Confirmation = ({display}) => {
	return (
		<ConfirmationStyled style={{display: `${display}`}}>
			<img src="../../static/data/thumbsup.png"></img>
			<h3>Thank you for getting in touch with us</h3>
		</ConfirmationStyled>
	);
};

export default Confirmation;