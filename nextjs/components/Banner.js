import React, {Component} from "react";
import axios from "axios";
import styled from 'styled-components';

const BannerStyled = styled.div`
	bottom: 0;
	width: 100vw;
	height: 70px;
	display: flex;
	justify-content: space-around;
	flex-direction: row-reverse;
	background-color: #FE5A67;


	.bannerItems {
	line-height: 2%;
	color: white;
	display: flex;
	height: 50px;
	}

`;

class Banner extends Component {
  	state = {
    	banner: [],
	}

	componentDidMount(){
		axios.get(`http://localhost/wp-json/wp/v2/banner`)
		.then(response => {
			this.setState({ banner: response.data });

		})
	}

	render() {
		return (
			<BannerStyled>
				<div className="banner">
					{
						this.state.banner.map(item => {
						return (
							<div className="bannerItems" key={item.id}>
								<p href="#" dangerouslySetInnerHTML={{__html:item.content.rendered}}></p>
							</div>
						)
						})
					}
				</div>
			</BannerStyled>
		)
	}
}


export default Banner;
