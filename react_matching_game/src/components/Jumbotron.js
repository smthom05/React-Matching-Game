import React from 'react';

const styles = {
  jumbotron: {
    textAlign: "center",
    background: "black",
    color: "white",
    fontSize: 80,
    padding: 100
  }
};


const Jumbotron = () => {
  return (
    <div>
      <div style={styles.jumbotron} className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-3">React Matching Game</h1>
            <h3> Click on an image to earn points, but do not click on an image more than once! </h3>
        </div>
      </div>
  </div>
)
}

export default Jumbotron;
