import { useRecoilValue } from "recoil";
import Receipt from "./components/Receipt/Receipt";
import TotalBar from "./components/Totalbar/TotalBar.jsx";
import { receiptAtom } from "./recoil/atoms/receiptAtom";
import styles from "./App.module.css";

const App = () => {
  const receipts = useRecoilValue(receiptAtom);

  return (
    <div className="App">
      <div className={styles.container}>
        {receipts.map((receipt) => {
          return <Receipt key={receipt.id} receipt={receipt} />;
        })}
      </div>
      <div className={styles.totalContainer}>
        <TotalBar />
      </div>
    </div>
  );
};

export default App;
