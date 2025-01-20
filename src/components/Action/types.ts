import { FunctionComponent } from "react";

export type ActionType = "a" | "button" | FunctionComponent;

export enum ActionVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum ButtonType{
  Submit = 'submit',
  Button = 'button',
}



