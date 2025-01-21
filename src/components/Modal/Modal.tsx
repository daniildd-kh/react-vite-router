import React, { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Modal.module.scss";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

const Modal = ({ children, isOpen, onClose, className, ...props }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={clsx(styles.modalOverlay)} onClick={onClose}>
      <div
        className={clsx(styles.modalContent, className)}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
