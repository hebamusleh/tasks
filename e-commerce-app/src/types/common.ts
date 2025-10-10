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
  id: string;
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
  id:string;
  title: string;
  icon: React.ReactNode;
}

export interface ICTACard {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
}

export interface ITitleHeading {
  title: string;
}
