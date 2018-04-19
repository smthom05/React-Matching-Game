import React, { Component } from 'react';


class NavText extends Component {
  render() {
      switch(this.props.correctChoice) {
      case null:
        return <li> Click an image to begin </li>
      case true:
        return <li className={this.props.correctChoice ? "correct" : ""}> You guessed correctly! </li>
      case false:
        return <li className={!this.props.correctChoice ? "incorrect" : ""}> You guessed incorrectly... </li>
      default:
        return <li> Click an image to begin </li>
    }
  }
}

export default NavText;
