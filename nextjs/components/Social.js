import React, {Component} from "react";
import styled from 'styled-components';

const SocialStyled = styled.div`
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;

	.socialItems {
	width: 100%;
	height: 100%;

	}
`;

class Social extends Component {
  state = {
    social: [],

}

componentDidMount() {
  fetch('http://localhost:8888/wp-json/wp/v2/social')
     .then(response => response.json())
     .then(json => {

          this.setState({
          social: json,
          isFetched: true
    }, () => {
      this.state.social.map(soc => {
        let imgId = soc.featured_media;
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
  <SocialStyled>
    <div className="social">
    {this.state.social.map(soc => {
      console.log(soc);
      return (
      <div className="socialItems">
    {soc.featured_media > 0 && (<img src={this.state.image}></img>)}
    <p dangerouslySetInnerHTML={{__html:soc.content.rendered}}></p>
      </div>
        )
      })
    }
    </div>
  </SocialStyled>

    )
  }
}


export default Social;
