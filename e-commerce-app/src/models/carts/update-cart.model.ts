export interface IUpdateCart {
  merge: boolean;
  products: {
    id: number;
    quantity: number;
  }[];
}
