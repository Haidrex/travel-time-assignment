import React from "react";
import { priceFormatter } from "../../utils/utils";
import Expense from "./Expense";
import styles from "./Expenses.module.css";

const Expenses = ({ receipt }) => {
  return (
    <div className={styles.container}>
      {receipt.expenses.map((expense) => {
        return (
          <Expense
            key={`${receipt.id} - ${expense.id}`}
            receiptId={receipt.id}
            expense={expense}
          />
        );
      })}
      <div className={styles.total}>
        <span>Total</span>
        <span className={styles.totalAmount}>
          {priceFormatter(receipt.total)}
        </span>
      </div>
    </div>
  );
};

export default Expenses;
