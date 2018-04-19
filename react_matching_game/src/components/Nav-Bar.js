import React, { Component } from 'react';

const styles = {
  navbar: {
    background: "#4B399E",
    padding: 10
  },
  title: {
    textAlign: "left",
    color: "white",
    fontSize: 30,
    paddingLeft: 50
  },
  guess: {
    paddingLeft: 300,
    color: "white",
    fontSize: 30
  },
  score: {
    float: "right",
    color: "white",
    fontSize: 30
  }
};

class NavBar extends Component {
render() {
  return (
  <div style={styles.navbar}>
    <nav className="navbar fixed-top navbar-light bg-faded">
  <span style= {styles.title}> Matching Game </span>
  <span style={styles.guess}> You guessed </span>
  <span style={styles.score}> Score: | Top Score: </span>
    </nav>
  </div>
);
}
}

export default NavBar;
