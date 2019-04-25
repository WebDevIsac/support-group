import React, {Component} from "react";
import axios from "axios";
import styled from 'styled-components';

const BannerStyled = styled.div`

	.banner {
		position: absolute;
		display: flex;
		justify-content: space-around;
		align-items: center;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 80px;
		background-color: #FE5A67;
	}

	.left-items {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin: 20px;
		width: 100%;
		list-style: none;
		color: white;
	}

	.right-items {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin: 20px;
		width: 100%;
		list-style: none;
		color: white;
	}

	@media (max-width: 768px) {

		.banner {
			display: flex;
			flex-direction:row;
			flex-wrap:wrap;
			justify-content: space-between;
			left: 0;
			height: 220px;
			bottom: 0;
			width: 100vw;
		}

		.left-items {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin: 20px;
			width: 100%;
			list-style: none;
			color: white;
		}

		.right-items {
			height: 110px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin: 20px;
			flex-wrap: wrap;
			width: 100%;
			list-style: none;
			color: white;
		}

		li {
			margin-top: 10px;
		}

		/* .bannerItems {
			list-style: none;
			display: flex;
			justify-content: center;
			width:33%;
		} */
	}


`;

class Banner extends Component {
  	state = {
    	banner: [],
	}

	componentDidMount(){
		axios.get(`http://localhost:8888/wp-json/wp/v2/footer?slug=banner&order=desc`)
		.then(res => {
			this.setState({ banner: res.data[0].acf.content});

		})
	}

	render() {
		return (
			<BannerStyled>
				<div className="banner">
					<div className="left-items">
						<li>About</li>
						<li>GDPR</li>
						<li>Cookies</li>
					</div>

					<div className="right-items">
						<li>orgnr: <b>802503-7097</b></li>
						<li>BG: <b>5138-5854</b></li>
						<li>© Support group network 2019</li>
					</div>
				</div>
			</BannerStyled>
		)
	}
}


export default Banner;
