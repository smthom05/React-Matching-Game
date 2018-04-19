import React, { Component } from 'react';

// const styles = {
// };

class Image extend Component {
  state = {
    image: "",
    wasClicked: false
  };

  componentDidMount() {

    }

  render() {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={this.state.image} src={this.state.image} />
        </div>
  )
}
}
