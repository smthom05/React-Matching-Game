import React from 'react';


const styles = {
  width: 270,
  height: 270,
  float: "left",
  display: "block",
  backgroundSize: "cover",
  backgroundPosition: "50%",
  margin: "8px 25px",
  border: "5px solid #f1f1f1",
  cursor: "pointer"
};

const Image = props => {
    return (
      <div className="card">
        <div className="img-container">
          <img onClick={() => props.userGuess(props.id)} style={styles} alt={props.image} src={props.image} />
        </div>
      </div>
      );
    }

  export default Image
