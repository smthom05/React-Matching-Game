import React, { Component } from 'react';
import NavText from "./Nav-Text";

const styles = {
  navbar: {
    background: "#4B399E",
    color: "white",
    fontSize: 30
  },
  ul: {
    margin: 0,
    padding: 0,
    display: "block",
    listStyleType: "disc"
  },

  li: {
    padding: "26px 0px",
    width: "33.3%",
    textAlign: "center",
    display: "inline-block"
  }
};

const NavBar = props => {
  return (
      <nav style={styles.navbar} className="navbar fixed-top">
        <ul style={styles.ul}>
          <li style={styles.li}> Matching Game </li>
          <li style={styles.li}>
          <NavText correctChoice={props.correctChoice}/>
          </li>
          <li style={styles.li}>
          Score: {props.score} | Top Score: {props.topScore}
          </li>
        </ul>
      </nav>
    );
}

export default NavBar;
