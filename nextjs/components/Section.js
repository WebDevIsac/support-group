import React, {Component} from "react";
import axios from "axios";
import './Section.css';
import styled from 'styled-components';

const SectionStyled = styled.div`
	background-color: #FE5A67;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-right: 10px;
	height: 60vh;
	width: 100%;

	.square {
	display: flex;
	align-items: center;
	flex-direction: row;
	background-color: white;
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);
	height: 360px;
	width: 280px;

	}


	.border-placement {
	height: 130px;
	width: 100%;
	}

	.border {
	border-bottom: 6px solid #FE5A67;
	width: 100%;
	}

	.button {
	height: 50px;
	width: 100px;
	border: 1px solid black;
	}

`;

class Section extends Component {
  state = {
    section: [],

}

componentDidMount(){
  axios.get(`http://localhost:8888/wp-json/wp/v2/section`)
  .then(res => {
      this.setState({ section: res.data });

  })
}


render() {
return(
  <SectionStyled>
  <section>

    <div className="square">
      <div className="border-placement">
    {this.state.section.map(sec => {
      return (
        <h4 className="title">{sec.title.rendered}</h4>
          )
        })
      }
        <div className="border">
          </div>
            </div>
              </div>


    <div className="square">
      <div className="border-placement">
        <div className="border">
          </div>
            </div>
                </div>

    <div className="square">
      <div className="border-placement">
        <div className="border">
          </div>
            </div>
                </div>
    </section>


  </SectionStyled>

    )
  }
}

export default Section;
