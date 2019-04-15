import React, { Component } from 'react';
import axios from "axios";
import Banner from './Banner';
import Social from './Social';
import Logo from './Logo';

import styled from 'styled-components';

const FooterStyled = styled.div`

	.footer {
	background-color: black;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	bottom: 0;
	left: 0;
	height: 500px;

	}

	.menuItems {
	margin-right: 50px;
	height: 150px;
	flex-direction: column;
	padding: 40px;
	align-items: center;
	color: white;
	width: 25%;

	}

	.socialItems {
	color: white;

	}

	.logo-position {
	font-size: 100px;
	height: 500px;
	flex-direction: row;
	margin-top: 100px;
	margin-left: 50px;
	align-items: flex-start;
	display: flex;

	}

	img {
	background-color: white;
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
    <div className= "footer">
    {this.state.posts.map(post => {
      return (
      <div className="menuItems">
		<h4>{post.acf.header}</h4>
        <p>{post.acf.description}</p>
      </div>

        )
      })
      }
	  <div className="logo-position">
		<div className="logo">
	  		<Logo color="white" width="200px"/>
				</div>
	  		</div>
		<Social />
	</div>
	<Banner />
</FooterStyled>

    )
  }
}

export default Footer;
