import React, { useContext } from "react";
import { TransactionContaxt } from "../Store/transactionContext";
export default function History() {
  const trans = useContext(TransactionContaxt);
  const [hover, setHover] = React.useState(false);
  const [i, setI] = React.useState(null);
  const handleDel = (index) => {
    trans.del_Trans(index);
  };
  return (
    <div className="history">
      <p className="history-p1">Transaction History</p>
      <hr />
      {trans.transactions.map((val, index) => {
        return (
          <div
            key={index}
            className="t-history"
            onMouseEnter={() => {
              setHover(true);
              setI(index);
            }}
            onMouseLeave={() => {
              setHover(false);
              setI(null);
            }}
            style={{
              borderRight: val.amount > 0 ? "5px solid green" : "5px solid red",
              backgroundColor:
                hover && i === index
                  ? val.amount > 0
                    ? "green"
                    : "red"
                  : null,
              cursor: "pointer",
            }}
          >
            <button
              className="del-btn"
              onClick={() => handleDel(index)}
              style={{ opacity: hover ? (i === index ? 1 : 0) : null }}
            >
              <i class="fas fa-times"></i>
            </button>

            <p className="t-history-p1">{val.desc}</p>
            <p className="t-history-p2">${val.amount}</p>
          </div>
        );
      })}
    </div>
  );
}
