import React, { FC } from "react";
import { SearchFieldProps } from "./types";
import styles from "./SearchField.module.scss";

const { searchTextField, resetButton, searchWrapper } = styles;

export const SearchField: FC<SearchFieldProps> = ({
  value,
  onChange,
  onReset,
}) => {
  const handleResetButton = () => onReset();
  return (
    <div className={searchWrapper}>
      <input className={searchTextField} value={value} onChange={onChange} />
      <button className={resetButton} onClick={handleResetButton}>RESET</button>
    </div>
  );
};
