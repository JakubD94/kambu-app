import React from "react";

function Sum(props) {
  return (
    <div className="sum-container">
      <p className="sum-text">The sum of all transactions in PLN is: <span className="sum">{props.transactionsSum}</span></p>
    </div>
  );
}

export default Sum;
