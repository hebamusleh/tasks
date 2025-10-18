/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Control } from "react-hook-form";

export interface INavItem {
  name: string;
  link: string;
}

export interface IFooterItems {
  id: string;
  title: string | React.ReactNode;
  Link: string;
}

export interface IFooterGroup {
  title: string;
  items: IFooterItems[];
}

export interface IDropdown {
  options: string[];
  placeholder?: string | React.ReactNode;
  onSelect: (value: string) => void;
  className?: string;
}

export interface IProductCard {
  id: string | number;
  cover: string;
  newItem?: boolean;
  offer?: number;
  title: string;
  price: number;
  oldPrice?: number;
  reviewsNum: number;
  colorsOption?: boolean;
}

export interface ICategoryCard {
  id: string;
  title: string;
}

export interface ICTACard {
  id: string;
  title: string;
  subTitle: string;
  icon: React.ReactNode;
}

export interface ITitleHeading {
  title: string;
}

export interface ICircleTime {
  title: string;
  number: number;
}

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