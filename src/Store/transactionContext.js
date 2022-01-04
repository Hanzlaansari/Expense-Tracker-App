import transactionReducer from "./transactionReducer";

import { createContext, useReducer } from "react";

const trans = [];

export const TransactionContaxt = createContext(trans);

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, trans);
  function add_Trans(obj) {
    dispatch({
      type: "Add_Transaction",
      payload: {
        desc: obj.desc,
        amount: obj.amount,
      },
    });
  }

  function del_Trans(index) {
    dispatch({
      type: "Del_Transaction",
      payload: index,
    });
  }
  return (
    <TransactionContaxt.Provider
      value={{
        transactions: state,
        add_Trans: add_Trans,
        del_Trans,
      }}
    >
      {children}
    </TransactionContaxt.Provider>
  );
};
