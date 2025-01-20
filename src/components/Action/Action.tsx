import { ReactNode } from "react";
import { ActionType, ActionVariant, ButtonType } from "./types";
import Anchor from "../Anchor/Anchor";
import styles from './Action.module.scss';
import clsx from "clsx";

type ActionProps = {
  type?: ButtonType;
  variant?: ActionVariant;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
  children?: ReactNode;
  elementType?: ActionType;
}

function withAction(defaults: ActionProps) {
  return function Action({
    type = defaults.type || ButtonType.Button,
    variant = defaults.variant || ActionVariant.Primary,
    disabled = false,
    className,
    onClick,
    href,
    children,
    elementType = defaults.elementType || 'button',
    ...props
  }: ActionProps){
    const ActionElement = (elementType === "a") ? Anchor : elementType;

    return(
      <ActionElement data-testid='button'
      href={elementType === "a" ? href : undefined}
      disabled={disabled}
      type={elementType === 'button' ? type : undefined}
      className={clsx(styles.button, styles[variant], className)}
      onClick={onClick}
      {...props}
      >
        {children}
      </ActionElement>
    )
  }
}

export const Button = withAction({});
export const SubmitButton = withAction({type:ButtonType.Submit});
export const LinkButton = withAction({elementType: 'a', variant: ActionVariant.Secondary});