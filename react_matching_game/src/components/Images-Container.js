import React from 'react';

const styles = {
  container: {
    padding: 300,
    background: "white"
  }
};

const ImagesContainer = props => <div style={styles.container} className="wrapper">{props.children}</div>;

export default ImagesContainer;
