import React, { ChangeEvent, useEffect, useState } from "react";
import { UserModel } from "./models/userModel";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { getUserList } from "./store/actionCreators";
import { Loader } from "./components/Loader";
import { UserList } from "./components/UserList";
import styles from "./App.module.scss";
import { SearchField } from "./components/SearchField";
import { BaseModal } from "./components/BaseModal";
import { UserItemModalContent } from "./components/UserItemModalContent";

const { applicationWrapper, header } = styles;

function App() {
  const { userList, isLoading, error } = useTypedSelector(
    (state) => state.userList
  );
  const [list, setList] = useState<UserModel[]>([]);
  const [searchPhrase, setSearchPhrase] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  useEffect(() => {
    setList(userList);
  }, [userList]);

  const handleRemoveItem = (email: string) => {
    setList((prev) => prev.filter((item) => item.email !== email));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(event.target.value);
  };

  const handleSearchReset = () => {
    setSearchPhrase("");
    setList(userList);
  };

  return (
    <div className={applicationWrapper}>
      <BaseModal>
        <UserItemModalContent />
      </BaseModal>
      <header className={header}><h1>USERLIST</h1></header>
      <SearchField
        value={searchPhrase}
        onChange={handleInputChange}
        onReset={handleSearchReset}
      />
      <Loader isLoading={isLoading} error={error}>
        <UserList
          data={list}
          search={searchPhrase}
          onRemove={handleRemoveItem}
        />
      </Loader>
    </div>
  );
}

export default App;
