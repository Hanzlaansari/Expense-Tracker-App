import React, { useState, useContext } from "react";
import { TransactionContaxt } from "../Store/transactionContext";
export default function AddTrans() {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  let { add_Trans } = useContext(TransactionContaxt);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(amount) === 0) {
      alert("Please Enter Correct Amount");
      return false;
    }
    add_Trans({
      desc: desc,
      amount: Number(amount),
    });
    document.getElementById("text").value = "";
    document.getElementById("number").value = "";
  };
  return (
    <div className="addTrans">
      <p className="add-trans-p1">Add Transaction</p>
      <hr />
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label className="label">Description</label>
          <br />
          <input
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            type="text"
            id="text"
            className="text"
            placeholder="Description here"
            required={true}
          />
          <br />
          <label className="label">Transaction Amount</label>
          <br />
          <input
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            type="number"
            id="number"
            className="text"
            placeholder="Amount here "
            required={true}
          />
          <br />
          <button type="submit" className="submit-btn">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
}
