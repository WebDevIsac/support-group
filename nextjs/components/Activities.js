import React, { Component } from 'react';
import './Activities.css';
import Section from '../Section';
import styled from 'styled-components';

const ActivitiesStyled = styled.div`
	margin: 25px;
	padding: 15px;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	flex-wrap: wrap-reverse;

	h1 {
	font-size: 40px;
	margin: 25px;
	text-align: left;
	}

	.activity {
	width: 25%;
	/* height: 200px; */
	flex-direction: column;

	}
	img {
	width: 100%;

	}

`;

class Activities extends Component {
state = {
  posts: [],
  isFetched: false,
  image: ''
}

componentDidMount() {
  fetch('http://localhost:8888/wp-json/wp/v2/activities')
     .then(response => response.json())
     .then(json => {

          this.setState({
          posts: json,
          isFetched: true
    }, () => {
      this.state.posts.map(post => {
        let imgId = post.featured_media;
        imgId > 0 && fetch(`http://localhost:8888/wp-json/wp/v2/media/${imgId}`)
        .then(response => response.json())
        .then(json => {
            this.setState({
              image: json.media_details.sizes.full.source_url
            })
        })
      })
    })
  });
}



render() {
  return (
<ActivitiesStyled><h1>Activities</h1>
<div className="container">
{this.state.posts.map(post => {
    console.log(post);
  return (
  <div className="activity">
{post.featured_media > 0 && (<img src={this.state.image}></img>)}
  <h4>{post.title.rendered}</h4>
    <p>{post.acf.description}</p>
  </div>
  )
}
)}

  </div>
  <Section />
</ActivitiesStyled>
    )
  }
}

export default Activities;
