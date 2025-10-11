import {
  DownloadQR,
  SocialGroup,
} from "../components/layout/footer/components";
import EmailInput from "../components/layout/footer/components/EmailInput";
import type { IFooterGroup, INavItem } from "../types";
import { PATHS } from "./paths";

export const navItems: INavItem[] = [
  {
    name: "Home",
    link: PATHS.HOME,
  },
  {
    name: "Contact",
    link: "",
  },
  {
    name: "About",
    link: "",
  },
  {
    name: "Sign Up",
    link: PATHS.SIGN_UP,
  },
];

export const footerItems: IFooterGroup[] = [
  {
    title: "Exclusive",
    items: [
      {
        id: "1",
        title: "Subscribe",
        Link: "",
      },
      {
        id: "2",
        title: "Get 10% off your first order",
        Link: "",
      },
      {
        id: "3",
        title: <EmailInput />,
        Link: "#",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        id: "4",
        title: "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
        Link: "https://www.google.com/maps/place/111+Bijoy+sarani,+Dhaka,+DH+1515,+Bangladesh",
      },
      {
        id: "5",
        title: "exclusive@gmail.com",
        Link: "",
      },
      {
        id: "6",
        title: "+88015-88888-9999",
        Link: "",
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        id: "7",
        title: "My Account",
        Link: "",
      },
      {
        id: "8",
        title: "Login/Register",
        Link: "",
      },
      {
        id: "9",
        title: "Cart",
        Link: "",
      },
      {
        id: "10",
        title: "Wishlist",
        Link: "",
      },
      {
        id: "11",
        title: "Shop",
        Link: "",
      },
    ],
  },
  {
    title: "Quick Link",
    items: [
      {
        id: "12",
        title: "Privacy Policy",
        Link: "",
      },
      {
        id: "13",
        title: "Terms Of Use",
        Link: "",
      },
      {
        id: "14",
        title: "FAQ",
        Link: "",
      },
      {
        id: "15",
        title: "Contact",
        Link: "",
      },
    ],
  },
  {
    title: "Download App",
    items: [
      {
        id: "13",
        title: (
          <div className="flex flex-col gap-6">
            <DownloadQR />
            <SocialGroup />
          </div>
        ),
        Link: "",
      },
    ],
  },
];
