import React, {Component} from "react";
import axios from "axios";
import styled from 'styled-components';

const BannerStyled = styled.div`


@media (max-width: 768px) {
  .banner {
	left: 0;
	bottom: 0;
	height: 100px;
	width: 300vw;
  }
}

	.banner {
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
	/* padding: 20px; */

	}

`;

class Banner extends Component {
  state = {
    banner: [],

}

componentDidMount(){
  axios.get(`http://localhost:8888/wp-json/wp/v2/banner`)
  .then(res => {
      this.setState({ banner: res.data });

  })
}

render() {
return (
  <BannerStyled>
    <div className="banner">
    {this.state.banner.map(bann => {
      console.log(bann);
      return (
      <div className="bannerItems">
        <p>{bann.acf.description}</p>
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
