import React from "react";
import { useRecoilState } from "recoil";
import { receiptAtom } from "../../recoil/atoms/receiptAtom";
import Button from "../Button";
import styles from "./ReceiptHeader.module.css";
import { replaceItemAtIndex } from "../../utils/utils";
import CustomSelect from "../CustomSelect";

const ReceiptHeader = ({ receipt }) => {
  const [receipts, setReceipts] = useRecoilState(receiptAtom);

  const index = receipts.findIndex((listItem) => listItem === receipt);

  const addNewExpense = () => {
    const newReceiptsList = replaceItemAtIndex(receipts, index, {
      ...receipt,
      expenses: [
        ...receipt.expenses,
        { id: receipt.expenses.length + 1, name: "", amount: 0 },
      ],
    });
    setReceipts(newReceiptsList);
  };

  return (
    <div className={styles.container}>
      <CustomSelect />
      <Button content="Add expense" variant="dark" onClick={addNewExpense} />
    </div>
  );
};

export default ReceiptHeader;
