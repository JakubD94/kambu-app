import React, { useState, useEffect } from "react";
import Header from "./Header";
import Transaction from "./Transaction";
import NewTransaction from "./NewTransaction";
import Rate from "./Rate";
import Sum from "./Sum";
import Max from "./Max";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [rate, setRate] = useState();
  const [sum, setSum] = useState();
  const transactionsArray = transactions.sort((a, b)=> {
    return a.euro - b.euro;
  });
  const biggestTransaction = transactionsArray.reverse();
  console.log(biggestTransaction);


  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/fe720c40045e9bf814dde34f/pair/EUR/PLN")
    .then(res => res.json())
    .then(data => setRate(data.conversion_rate.toFixed(2)))
  });
  
  useEffect(() => {
      setSum((transactions.reduce((prev, transaction) => {
        return (prev + (transaction.euro * rate));
      }, 0)).toFixed(2));
  }, [transactions]);

  function addTransaction(newTransaction) {
    setTransactions(prevTransaction => {
      return [...prevTransaction, newTransaction];
    });
  }

  function deleteTransaction(id) {
    setTransactions(prevTransaction => {
      return prevTransaction.filter((transactionItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
        <NewTransaction onAdd={addTransaction} />
        <div className="all-transactions">
          {transactions.map((transactionItem, index) => {
            return (
              <Transaction
                key={index}
                id={index}
                title={transactionItem.title}
                euro={transactionItem.euro}
                rate={rate}
                pln={(transactionItem.euro * rate).toFixed(2)}
                onDelete={deleteTransaction}
              />
            );
          })}
        </div>
        <div className="secondary-information">
          <Rate 
            rate={rate}
          />
          <Sum 
            transactionsSum={sum}
          />
          <Max
            title={biggestTransaction.length === 0 ? "Transaction title" : biggestTransaction[0].title}
            euro={biggestTransaction.length === 0 ? "0.00" : biggestTransaction[0].euro}
            rate={rate}
          />
        </div>
    </div>
  );
}

export default App;
