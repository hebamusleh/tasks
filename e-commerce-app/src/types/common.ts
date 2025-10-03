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
