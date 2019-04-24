import React, {Component} from "react";
import styled from 'styled-components';

const SocialStyled = styled.div`
	/* height: 60px; */
	display: flex;
	position: absolute;
	/* justify-content: flex-end; */
	flex-direction: column;

	.social {
	display: flex;
	flex-direction: column-reverse;
}
	.socialItems {
	margin-right: 40px;
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
			<h4>{soc.title.type}</h4>
    		<img src={soc.acf.image}></img>
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
