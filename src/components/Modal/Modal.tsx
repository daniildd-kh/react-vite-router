import React, { ReactNode, useState } from "react";
import clsx from "clsx";
import styles from "./Modal.module.scss";
import { Button } from "../Action/Action";
import { createPortal } from "react-dom";
import { Text } from "../Typography/Typography";

type ModalProps = {
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
};

export const Modal = ({ children, isOpen, onClose, className, ...props }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
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
    </div>,
    document.body
  );
};

interface ModalWithTriggerProps{
  children?: ReactNode;
  triggerText?: string;
  className?: string;
}

export const ModalWithTrigger = ({children, triggerText, className}:ModalWithTriggerProps) =>{

  const [showModal, setShowOpen] = useState(false);
  const closeModal = () => setShowOpen(false);
  const openModal = () => setShowOpen(true);
  
  return(
  <>
    <Button onClick={openModal}>
      <Text value={triggerText}/>
    </Button>
    <Modal isOpen={showModal} onClose={closeModal} className={className}>
      {children} 
    </Modal>
  </>)
}
