import React, { FC, MouseEvent } from "react";
import { createPortal } from "react-dom";
import { BaseModalProps } from "./types";
import { useDispatch } from "react-redux";
import styles from "./BaseModal.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setIsModalOpened } from "../../store/actionCreators";

const { modalWrapper, modalContent, closeModalButton } = styles;

export const BaseModal: FC<BaseModalProps> = ({ children }) => {
  const { isOpened } = useTypedSelector((state) => state.modal);
  const dispatch = useDispatch();

  const stopPropagationClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    dispatch(setIsModalOpened(false))
  }

  if (!isOpened) return null;

  return createPortal(
    <div className={modalWrapper} onClick={handleClose}>
      <div className={modalContent} onClick={stopPropagationClick}>
        <button className={closeModalButton} onClick={handleClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};
