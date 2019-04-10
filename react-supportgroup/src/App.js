import React, { Component } from 'react';
import Activities from './components/Activities';
import Footer from './components/Footer';
import ScrollUpButton from "react-scroll-up-button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollUpButton />
        <Activities/>
        <Footer/>
    
      </div>
    );
  }
}

export default App;
