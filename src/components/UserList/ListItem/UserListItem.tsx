import React, { FC } from "react";
import { UserListItemProps } from "./types";
import styles from "./UserListItem.module.scss";
import { getListItemText } from "./utils";
import { useDispatch } from "react-redux";
import {
  setIsModalOpened,
  setUserItemModalContent,
} from "../../../store/actionCreators";

const { listItem, fieldName, removeButton } = styles;

export const UserListItem: FC<UserListItemProps> = ({
  search,
  data,
  onRemove,
}) => {
  const dispatch = useDispatch();
  const { email, name, username, company, address } = data;
  const { street, city, suite, zipcode } = address;
  const handleOpenModalInfo = () => {
    const modalContent = {
      company: company.name,
      street,
      city,
      suite,
      zipcode,
    };
    dispatch(setUserItemModalContent(modalContent));
    dispatch(setIsModalOpened(true));
  };

  const handleRemoveButton = () => onRemove(email);

  const content = { name, username, email };

  return (
    <li className={listItem} onClick={handleOpenModalInfo}>
      <button className={removeButton} onClick={handleRemoveButton}>
        X
      </button>
      {Object.entries(content).map(([key, value]) => (
        <div key={key}>
          <span className={fieldName}>{`${key}: `}</span>
          <span>{getListItemText(value, search)}</span>
        </div>
      ))}
    </li>
  );
};
