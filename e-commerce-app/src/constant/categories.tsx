import { v4 as uuidv4 } from "uuid";
import {
  CameraIcon,
  CellPhoneIcon,
  ComputerIcon,
  CustomerServiceIcon,
  DeliveryIcon,
  GamingIcon,
  HeadphoneIcon,
  SecureIcon,
  SmartWatchIcon,
} from "../components";
import type { ICategoryCard, ICircleTime, ICTACard } from "../types";

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

export const ctaData: ICTACard[] = [
  {
    id: uuidv4(),
    icon: <DeliveryIcon />,
    title: "FREE AND FAST DELIVERY",
    subTitle: "Free delivery for all orders over $140",
  },
  {
    id: uuidv4(),
    icon: <CustomerServiceIcon />,
    title: "24/7 CUSTOMER SERVICE",
    subTitle: "Friendly 24/7 customer support",
  },
  {
    id: uuidv4(),
    icon: <SecureIcon />,
    title: "MONEY BACK GUARANTEE",
    subTitle: "We reurn money within 30 days",
  },
];

export const data: ICircleTime[] = [
  {
    title: "Hours",
    number: 23,
  },
  {
    title: "Days",
    number: 20,
  },
  {
    title: "Minutes",
    number: 20,
  },
  {
    title: "Seconds",
    number: 20,
  },
];
