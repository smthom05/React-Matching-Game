import React from 'react';

const styles = {
  footer: {
    background: "#4B399E",
    padding: 10,
    color: "white",
    fontSize: 20
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
