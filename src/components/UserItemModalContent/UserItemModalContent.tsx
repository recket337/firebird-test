import React from "react";
import styles from "./UserItemModalContent.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const { userItemModalContent, userItemModalHeader, userItemModalListItem } =
  styles;

export const UserItemModalContent = () => {
  const { userListItem } = useTypedSelector((state) => state.modal);
  return (
    <div className={userItemModalContent}>
      <h2 className={userItemModalHeader}>User info</h2>
      <ul>
        {Object.entries(userListItem).map(([key, value]) => (
          <li className={userItemModalListItem}>
            <span>{`${key}:`}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
