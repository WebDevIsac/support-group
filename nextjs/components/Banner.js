import React, {Component} from "react";
import axios from "axios";
import styled from 'styled-components';

const BannerStyled = styled.div`


@media (max-width: 768px) {
  .banner {
	left: 0;
	bottom: 0;
	height: 100px;

  }
}

	.banner {
	position: absolute;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: row-reverse;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 70px;
	background-color: #FE5A67;

	}

	.bannerItems {
	color: white;
	}

`;

class Banner extends Component {
  	state = {
    	banner: [],
	}

componentDidMount(){
  axios.get(`http://localhost:8888/wp-json/wp/v2/footer?slug=banner&order=desc`)
  .then(res => {
console.log(res.data[0]);
      this.setState({ banner: res.data[0].acf.content});

		})
	}

render() {
return (
  <BannerStyled>
    <div className="banner">
    {this.state.banner.map(bann => {
      return (
      <div className="bannerItems">
        <p>{bann.text}{bann.number && bann.number}</p>
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
