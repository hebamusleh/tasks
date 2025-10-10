import { v4 as uuidv4 } from "uuid";
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
    id: uuidv4(),
    icon: <CellPhoneIcon />,
    title: "Phones",
  },
  {
    id: uuidv4(),
    icon: <ComputerIcon />,
    title: "Computers",
  },
  {
    id: uuidv4(),
    icon: <SmartWatchIcon />,
    title: "SmartWatch",
  },
  {
    id: uuidv4(),
    icon: <CameraIcon />,
    title: "Camera",
  },
  {
    id: uuidv4(),
    icon: <HeadphoneIcon />,
    title: "HeadPhones",
  },
  {
    id: uuidv4(),
    icon: <GamingIcon />,
    title: "Gaming",
  },
  {
    id: uuidv4(),
    icon: <CellPhoneIcon />,
    title: "Phones",
  },
  {
    id: uuidv4(),
    icon: <ComputerIcon />,
    title: "Computers",
  },
  {
    id: uuidv4(),
    icon: <SmartWatchIcon />,
    title: "SmartWatch",
  },
  {
    id: uuidv4(),
    icon: <CameraIcon />,
    title: "Camera",
  },
  {
    id: uuidv4(),
    icon: <HeadphoneIcon />,
    title: "HeadPhones",
  },
  {
    id: uuidv4(),
    icon: <GamingIcon />,
    title: "Gaming",
  },
];
