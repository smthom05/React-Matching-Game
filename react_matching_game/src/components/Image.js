import React from 'react';


const styles = {
  width: 270,
  height: 270,
  float: "left",
  display: "block",
  backgroundSize: "cover",
  backgroundPosition: "50%",
  margin: "8px 25px",
  cursor: "pointer"
};

const Image = props => {
    return (
      <div className="card">
        <div onClick={() => props} className="img-container">
          <img style={styles} alt={props.image} src={props.image} />
        </div>
      </div>
      );
    }

  export default Image
