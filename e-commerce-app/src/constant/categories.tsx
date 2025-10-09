import {
  CameraIcon,
  CellPhoneIcon,
  ComputerIcon,
  GamingIcon,
  HeadphoneIcon,
  SmartWatchIcon,
} from "../components";
import type { ICategoryCard } from "../types";

export const categories: ICategoryCard[] = [
  {
    icon: <CellPhoneIcon />,
    title: "Phones",
  },
  {
    icon: <ComputerIcon />,
    title: "Computers",
  },
  {
    icon: <SmartWatchIcon />,
    title: "SmartWatch",
  },
  {
    icon: <CameraIcon />,
    title: "Camera",
  },
  {
    icon: <HeadphoneIcon />,
    title: "HeadPhones",
  },
  {
    icon: <GamingIcon />,
    title: "Gaming",
  },
];
