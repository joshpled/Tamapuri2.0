import React, { Component } from "react";
import { connect } from "react-redux";
import Transition from './containers/Transition'
import DisplayCanvas from  './containers/DisplayCanvas'
import SplashScreen from './components/SplashScreen'
import NewPetForm from './containers/NewPetForm'
import Store from './components/Store'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Route exact path="/game" component={DisplayCanvas}/>
      <Route exact path="/" component={SplashScreen} />
      <Route exact path='/name' component={NewPetForm}/>
      <Route exact path='/loading' component={Transition}/>
      <Route exact path='/store' component={Store}/>
      {/* <Route exact path='/slot-machine' component{SlotMachine}/> */}
      </div>
      </Router>
    );
  } 
}

export default connect()(App);
