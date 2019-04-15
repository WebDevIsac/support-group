import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

import styled from 'styled-components';


const OrbusStyled = styled.div`

.logoPosition {
	display: flex;
	flex-direction: column;
	margin-top: 100px;
}


.image {
	justify-content: center;
	height: 100px;
}


.text {
	padding: 200px;
	display: flex;
	flex-direction: column;
}
`;


class Orbus extends Component {
	state = {
	  orbus: [],

	}


	componentDidMount(){
	  axios.get(`http://localhost:8888/wp-json/wp/v2/orbus`)
	  .then(res => {
	      this.setState({ orbus: res.data });

	  })
	}

	render() {
		return (
		<Layout>
		<OrbusStyled >
	    <div>
	    {this.state.orbus.map(orbus => {
	      return (
	      <div className="logoPosition">
			<img className="image" src={orbus.acf.image}></img>
	        <p className="text">{orbus.acf.description}</p>
	      </div>

	        )
	      })
	      }
		</div>
		</OrbusStyled >
		</Layout>

		)
	  }
	}

export default Orbus;
