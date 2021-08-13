import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function NewTransaction(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [transaction, setTransaction] = useState({
    title: "",
    euro: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setTransaction((prevTransaction) => {
      return {
        ...prevTransaction,
        [name]: value
      };
    });
  }

  function submitTransaction(event) {
    props.onAdd(transaction);
    setTransaction({
      title: "",
      euro: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }
  
  return (
    <div>
      <form className="create-transaction">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={transaction.title}
            placeholder="Transaction title"
          />
        )}
        <input
          type="number"
          name="euro"
          min="0.01"
          step="0.01"
          onChange={handleChange}
          onClick={expand}
          value={transaction.euro}
          placeholder="How many euros?"
          rows={isExpanded === true ? 3 : 1}
        />
        {isExpanded === true ? (
          <Zoom in={true}>
            <Fab onClick={submitTransaction}>
              <AddIcon />
            </Fab>
          </Zoom>
        ) : null}
      </form>
    </div>
  );
}

export default NewTransaction;
