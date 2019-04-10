import React, { Component } from 'react';
import axios from "axios";
import Banner from './Banner';
import Social from './Social';

import styled from 'styled-components';

const FooterStyled = styled.div`
	height: 500px;
	padding: 50px;
	background-color: black;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	flex-wrap: wrap;


	.menuItems {
	color: white;
	width: 20%;
	height: 200px;
	}


	.social {
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;


	}

	.socialItems {
	width: 100%;
	height: 100%;

	}
`;

class Footer extends Component {
state = {
  posts: [],

}

componentDidMount(){
  axios.get(`http://localhost:8888/wp-json/wp/v2/footer`)
  .then(res => {
      this.setState({ posts: res.data });

  })
}

render() {
return(
  <FooterStyled>
    <div className="footer">
    {this.state.posts.map(post => {
      return (
      <div className="menuItems">
        <p>{post.acf.description}</p>
      </div>
        )
      })
      }

      </div>
      <Banner />
    </FooterStyled>

    )
  }
}

export default Footer;
