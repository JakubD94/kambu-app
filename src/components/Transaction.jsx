import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Transaction(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="transaction">
      <h1>{props.title}</h1>
      <p>{props.euro} &euro; * {props.rate}</p>
      <p>= {props.pln} PLN</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Transaction;
