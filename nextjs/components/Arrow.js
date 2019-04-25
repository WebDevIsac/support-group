import React from 'react';
import styled from 'styled-components';

const ArrowStyled = styled.span`
	width: 28px;
	height: 24px;
	display: inline-block;
	position: relative;

	span:nth-child(1) {
		transform: rotate(-45deg);
	}

	span:nth-child(2) {
		transform: rotate(45deg);
	}

  	span {
		position: absolute;
		height: 2.4px;
		background: #fff;
		transition: transform .2s ease;
	}

    span:nth-child(1),
    span:nth-child(2),
    span:nth-child(4),
    span:nth-child(5) {
		width: 10px;
		top: 10px;
	}

    span:nth-child(1) {
      right: 0;
	  transform-origin: bottom right ;
	}

    span:nth-child(2) {
      right: 0;
	  transform-origin: top right ;
	}

    span:nth-child(3) {
      width: 28px;
	  top: 10px;
	}

    span:nth-child(4) {
	  left: 0;
	  transform-origin: bottom left;
	}

    span:nth-child(5) {
      left: 0;
	  transform-origin: top left;
	}
`;

const Arrow = () => {
	return (
		<ArrowStyled className="arrow">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</ArrowStyled>
	);
};

export default Arrow;
