import "./App.css";
import Header from "./components/header";
import Balance from "./components/Balance";
import History from "./components/transactionHistory";
import AddTrans from "./components/addTransaction";
import { TransactionProvider } from "./Store/transactionContext";
function App() {
  return (
    <TransactionProvider>
      <div className="main">
        <Header />
        <Balance />
        <History />
        <AddTrans />
      </div>
    </TransactionProvider>
  );
}

export default App;
