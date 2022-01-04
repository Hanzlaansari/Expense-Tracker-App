import React, { useContext } from "react";
import { TransactionContaxt } from "../Store/transactionContext";

export default function Balance() {
  let { transactions } = useContext(TransactionContaxt);

  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) {
        income = income + transactions[i].amount;
      }
    }
    return income;
  };
  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) {
        expense = expense + transactions[i].amount;
      }
    }
    return expense;
  };
  return (
    <div className="balance">
      <p className="balance-p1">
        Current Balance
        <br />$ {Number(getIncome()) + Number(getExpense())}
      </p>
      <div className="show-balance">
        <div className="income-balance">
          <p className="income-balance-p">
            Income <br />${getIncome()}
          </p>
        </div>
        <div className="expense-balance">
          <p className="expense-balance-p">
            Expense <br />${getExpense()}
          </p>
        </div>
      </div>
    </div>
  );
}
