import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

import styled from 'styled-components';


const DoubleStyled = styled.div`

.cupPosition {
	display: flex;
	flex-direction: column;
	margin-top: 100px;
}


.cupImage {
	display: flex;
	align-self: center;
	justify-content: center;
	height: 150px;
	width: 250px;
}


.text {
	padding: 200px;
	display: flex;
	flex-direction: column;
}
`;


class Double extends Component {
	state = {
	  double: [],

	}


	componentDidMount(){
	  axios.get(`http://localhost:8888/wp-json/wp/v2/doublecup`)
	  .then(res => {
	      this.setState({ double: res.data });

	  })
	}

	render() {
		return (
		<Layout>
		<DoubleStyled >
	    <div>
	    {this.state.double.map(double => {
	      return (
	      <div className="cupPosition">
			<img className="cupImage" src={double.acf.image}></img>
	        <p className="text">{double.acf.description}</p>
	      </div>

	        )
	      })
	      }
		</div>
		</DoubleStyled >
		</Layout>

		)
	  }
	}

export default Double;
