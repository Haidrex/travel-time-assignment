import { selector } from "recoil";
import { receiptAtom } from "../atoms/receiptAtom";

export const receiptsTotalState = selector({
  key: "ReceiptsTotals",
  get: ({ get }) => {
    const receipts = get(receiptAtom);
    const total = Object.values(receipts).reduce(
      (t, receipt) => t + receipt["total"],
      0
    );

    return total;
  },
});
