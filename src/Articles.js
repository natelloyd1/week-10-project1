import React, { Component } from "react";

class Articles extends Component {
  
    constructor(props) {
    super(props);
   
  }

  handleChange(e) {
    // e.currentTarget: DOM element we attached the event handler to
    // use the value property to read its current value
    this.setState({ input: e.currentTarget.value });
}


  render() {


    return () 
  }; 
};

export default Articles;