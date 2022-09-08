import React, { useState } from "react";
import styles from "./CustomSelect.module.css";
import caretDown from "../assets/caret-down.svg";

const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const [selectedOption, setSelectedOption] = useState("Select");

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  const options = ["Food", "Houseware", "Entertainment"];

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={toggling}>
        <div>{selectedOption}</div>
        <img src={caretDown} className={styles.headerArrow} />
      </div>
      {isOpen && (
        <div>
          <ul className={styles.list}>
            {options.map((option) => (
              <li onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
