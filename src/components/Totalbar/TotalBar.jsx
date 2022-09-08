import React from "react";
import Button from "../Button";
import styles from "./TotalBar.module.css";
import { priceFormatter } from "../../utils/utils";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { receiptAtom } from "../../recoil/atoms/receiptAtom";
import { receiptsTotalState } from "../../recoil/selectors/receiptSelector";

const TotalBar = () => {
  const setReceipts = useSetRecoilState(receiptAtom);
  const total = useRecoilValue(receiptsTotalState);

  const addNewReceipt = () => {
    setReceipts((receipts) => [
      ...receipts,
      {
        id: receipts.length + 1,
        expenses: [],
        total: 0,
      },
    ]);
  };

  return (
    <div className={styles.container}>
      <span className={styles.total}>Total {priceFormatter(total)}</span>
      <Button content="Add receipt" onClick={addNewReceipt} />
    </div>
  );
};

export default TotalBar;
