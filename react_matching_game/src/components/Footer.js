import React from 'react';

const styles = {
  footer: {
    background: "#4B399E",
    padding: 50,
    color: "white",
    fontSize: 30,
    textAlign: "center"
  },
};


const Footer = () => {
  return (

    <div style={styles.footer} className="card-footer text-muted">
      Matching Game
    </div>
  )
}

export default Footer
