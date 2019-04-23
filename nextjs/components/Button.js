import React, {Component} from "react";
import axios from "axios";
import styled from 'styled-components';

const ButtonStyled = styled.div`

@media screen and (max-width: 768px) {

	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	bottom: 0;
	right: 0;
	margin-right: 16px;
	margin-bottom: 16px;
	opacity: 0.57;
	position: fixed;
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);
	width: 70px;
 	height: 70px;
	border-radius: 50%;
	background-color: var(--pink);


	&.changeColor {
	transition: 0.2s;
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);
	opacity: 1;
}


	.bar {
	text-align: center;
	width: 35px;
	margin: 8px;
	height: 4px;
	background-color: #fff;

}

}

`;




class Button extends Component {
	render() {
		setTimeout(() => {
			let button = document.querySelector('#footer-button');


		let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		let lastScrollTop = scrollTop;

		window.addEventListener('scroll', function () {
		 scrollTop = document.body.scrollTop|| document.documentElement.scrollTop;
		  if(scrollTop < lastScrollTop) {
		    button.classList.add('changeColor');
		}   else {
		    button.classList.remove('changeColor');
		}
		  lastScrollTop = scrollTop;


		});

		const footer = document.querySelector('#footer-menu');
		button.addEventListener('click', ( event ) => {
			console.log('footer');
			if (footer.classList.contains('showMenu')) {
				footer.classList.remove('showMenu');
			}
			else {
				footer.classList.add('showMenu');
			}
		})


}, 2000);

		return(
		<ButtonStyled className="button" id="footer-button">
			<div className="bar-placement">
			<div className="bar"></div>
			<div className="bar"></div>
			</div>
		</ButtonStyled>
	)
}
}



export default Button;
