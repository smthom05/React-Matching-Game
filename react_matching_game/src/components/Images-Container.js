import React from 'react';

const styles = {
  container: {
    background: "white",
    display: "flex",
    minHeight: "80%",
    flexWrap: "wrap",
    paddingTop: 50,
    paddingBottom: 50,
    justifyContent: "center",
    width: "90%",
    margin: "0px auto"

  }
};

const ImagesContainer = props => <div style={styles.container} className="wrapper">{props.children}</div>;

export default ImagesContainer;
