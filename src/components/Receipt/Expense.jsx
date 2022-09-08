import React from "react";
import styles from "./Expense.module.css";
import { useRecoilState } from "recoil";
import { receiptAtom } from "../../recoil/atoms/receiptAtom";
import { replaceItemAtIndex } from "../../utils/utils";
import CurrencyInput from "../CurrencyInput";

const Expense = ({ receiptId, expense }) => {
  const [receipts, setReceipts] = useRecoilState(receiptAtom);

  const index = receipts.findIndex((listItem) => listItem.id === receiptId);

  const expensesTotal = (expenses) => {
    const expensesTotal = Object.values(expenses).reduce(
      (t, expense) => t + expense.amount,
      0
    );
    return expensesTotal;
  };

  const editExpense = (event) => {
    //if the value is amount parse it to float
    let value = event.target.value;
    if (event.target.name === "amount") {
      //convert the currency string to number
      value = Number(value.replace(/[^0-9.-]+/g, ""));
    }

    //expenses array with the edited expense
    const updatedExpenses = replaceItemAtIndex(
      receipts[index].expenses,
      expense.id - 1,
      {
        ...expense,
        [event.target.name]: value,
      }
    );

    //add the updated expenses to the receipt
    const newList = replaceItemAtIndex(receipts, index, {
      ...receipts[index],
      expenses: [...updatedExpenses],
      total: expensesTotal(updatedExpenses),
    });
    setReceipts(newList);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.name}
        type="text"
        name="name"
        placeholder="Expense name"
        onChange={editExpense}
        value={expense.name}
      />
      {/* <input
        name="amount"
        type="number"
        placeholder="€0.00"
        min="0"
        onChange={editExpense}
        className={styles.amount}
      /> */}
      <CurrencyInput
        className={styles.amount}
        placeholder="€0.00"
        name="amount"
        onChange={editExpense}
      />
    </div>
  );
};

export default Expense;
