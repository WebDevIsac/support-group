import React, { Component } from 'react';
import './Activities.css';
import Section from '../Section';

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
<div><h1>Activities</h1>
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
</div>
    )
  }
}

export default Activities;
