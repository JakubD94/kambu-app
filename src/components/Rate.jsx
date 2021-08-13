import React from "react";

function Rate(props) {
  return (
    <div className="rate-container">
      <p className="rate-text">Todays rate is: <span className="rate">{props.rate}</span></p>
    </div>
  );
}

export default Rate;
