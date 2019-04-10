import React, {Component} from "react";
import axios from "axios";
import './Banner.css';

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
  <div>
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
  </div>

    )
  }
}


export default Banner;
