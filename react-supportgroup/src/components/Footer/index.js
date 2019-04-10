import React, { Component } from 'react';
import axios from "axios";
import './Footer.css';
import Banner from '../Banner';
import Social from '../Social';


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
  <div>
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
    </div>

    )
  }
}

export default Footer;
