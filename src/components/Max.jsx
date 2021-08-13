import React from "react";

function Max(props) {
  return (
    <div className="max-container">
      <p className="max-text">The biggest transaction is: <span className="max">
        <p>{props.title}</p>
        <p>{props.euro} &euro; * {props.rate}</p>
        <p>= {(props.euro * props.rate).toFixed(2)} PLN</p>
      </span></p>
    </div>
  );
}

export default Max;
