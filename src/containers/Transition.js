import React, { Component } from "react";
import LoadingBar from "../components/LoadingBar";
import { Redirect } from "react-router-dom";

class Transition extends Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 2500);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/game" />
    ) : (
      <div>
        <LoadingBar />
      </div>
    );
  }
}

export default Transition;
