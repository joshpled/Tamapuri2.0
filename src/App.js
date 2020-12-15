import React, { Component } from "react";
import { connect } from "react-redux";
import Pet from './containers/Pet'
import DisplayCanvas from  './containers/DisplayCanvas'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Route exact path="/game" component={DisplayCanvas}/>
      <Route exact path="/" component={Pet} />
      </div>
      </Router>
    );
  } 
}

export default connect()(App);
