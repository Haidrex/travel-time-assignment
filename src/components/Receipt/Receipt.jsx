import React from "react";
import Expenses from "./Expenses";
import ReceiptHeader from "./ReceiptHeader";

const Receipt = ({ receipt }) => {
  return (
    <div>
      <ReceiptHeader receipt={receipt} />
      {receipt.expenses.length > 0 ? <Expenses receipt={receipt} /> : null}
    </div>
  );
};

export default Receipt;
