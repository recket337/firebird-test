import React, { FC, useCallback } from "react";
import { LoaderProps } from "./types";
import styles from "./Loader.module.scss";

const { loaderWrapper } = styles;

export const Loader: FC<LoaderProps> = ({ children, error, isLoading }) => {
  const getContent = useCallback(() => {
    switch (true) {
      case Boolean(error):
        return error;
      case isLoading:
        return "Loading...";
      default:
        return children;
    }
  }, [children, error, isLoading]);

  return <div className={loaderWrapper}>{getContent()}</div>;
};
