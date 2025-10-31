/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Control } from "react-hook-form";
import type { Props as SelectProps } from "react-select";

export interface IInput
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "name"> {
  name: string;
  control: Control<any>;
  label?: string | React.ReactNode;
  placeholder?: string;
  type?: string;
  error?: any;
  rules?: any;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  hasSuffix?: boolean;
  isSecondary?: boolean;
  disabled?: boolean;
  labelClassName?: string;
  customIcon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export interface IErrorMessage {
  message: string;
  className?: string;
}

export interface IAlertMessage {
  text: string;
  className?: string;
  type: "success" | "error";
}

export interface SelectOption {
  label: string;
  value: any;
  image?: string;
}

export interface ISelectInput extends SelectProps {
  name: string;
  control: Control<any, any>;
  options: SelectOption[];
  className?: string;
  placeholder?: string;
  label?: string | React.ReactNode;
  required?: boolean;
  rules?: any;
  error?: any;
  onChange?: (value: any) => void;
  hasCustomOption?: boolean;
  loadMore?: () => void;
  isAsync?: boolean;
  loadOptions?: any;
  hideIcon?: boolean;
  icon?: React.ReactNode;
  menuPlacement?: "top" | "bottom" | "auto";
}
