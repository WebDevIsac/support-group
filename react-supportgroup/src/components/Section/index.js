import React, {Component} from "react";
import axios from "axios";
import './Section.css';


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
  <div>
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


  </div>

    )
  }
}
export default Section;
