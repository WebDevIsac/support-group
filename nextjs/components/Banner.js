import React, {Component} from "react";
import axios from "axios";
import './Banner.css';
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
        <p href="#" dangerouslySetInnerHTML={{__html:bann.content.rendered}}></p>
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
