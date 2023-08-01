import React, { FC } from "react";
import { UserListProps } from "./types";
import styles from "./UserList.module.scss";
import { UserListItem } from "./ListItem";
import { UserModel } from "../../models/userModel";

const { list } = styles;

export const UserList: FC<UserListProps> = ({ data, search, onRemove }) => {
  const elementsList = data.reduce(
    (acc: JSX.Element[], item: UserModel): JSX.Element[] => {
      const { id, name, username, email } = item;

      const concattedString = [ name, username, email ].join("");

      if (
        concattedString
          .toLocaleLowerCase()
          .indexOf(search.toLocaleLowerCase()) === -1
      ) {
        return acc;
      }

      const element = <UserListItem data={item} search={search} onRemove={onRemove} key= {id}/>;

      acc.push(element);

      return acc;
    },
    []
  );

  if (!elementsList.length) return <>EMPTY</>;

  return <ul className={list}>{elementsList}</ul>;
};
